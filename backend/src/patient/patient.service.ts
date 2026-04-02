import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientAccountDto } from './DTOS/createClientAccountDto';
import { SearchDoctorsDto } from './DTOS/searchDoctorsDto';
import { BookAppointmentDto } from './DTOS/bookAppointmentDto';
import { CancelAppointmentDto } from './DTOS/cancelAppointmentDto';
import { RescheduleAppointmentDto } from './DTOS/rescheduleAppointmentDto';

@Injectable()
export class PatientService {

  constructor(private readonly prisma: PrismaService) {}

  // ─── CREATE CLIENT ACCOUNT ────────────────────────────────────────────────────

  async createClientAccount(userId: number, dto: CreateClientAccountDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException(`User not found`);
    if (user.role !== 'patient') throw new BadRequestException(`User does not have patient role`);

    const existing = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (existing) throw new BadRequestException(`Client account already exists`);

    return this.prisma.clientAccount.create({
      data: {
        userId,
        firstName: dto.firstName,
        lastName: dto.lastName,
        contactNumber: dto.contactNumber,
        email: dto.email
      }
    });
  }

  // ─── SEARCH DOCTORS ───────────────────────────────────────────────────────────

  async searchDoctors(dto: SearchDoctorsDto) {
    const doctors = await this.prisma.doctor.findMany({
      where: {
        isVerified: true,
        ...(dto.specializationId && {
          specializations: { some: { specializationId: dto.specializationId } }
        }),
        ...(dto.city && {
          doctorHospitals: {
            some: {
              OR: [
                { city: { contains: dto.city } },
                { hospital: { city: { contains: dto.city } } }
              ]
            }
          }
        }),
        ...(dto.maxFee && {
          doctorHospitals: { some: { firstConsultationFee: { lte: dto.maxFee } } }
        })
      },
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: {
          include: { hospital: { include: { office: true } } }
        }
      }
    });

    return doctors.map(doctor => ({
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      practices: doctor.doctorHospitals.map(dh => ({
        doctorHospitalId: dh.id,
        isPrivate: dh.isPrivate,
        firstConsultationFee: dh.firstConsultationFee,
        followupConsultationFee: dh.followupConsultationFee,
        city: dh.isPrivate ? dh.city : dh.hospital?.city,
        hospital: dh.isPrivate ? null : { name: dh.hospital?.name, city: dh.hospital?.city }
      }))
    }));
  }

  // ─── VIEW DOCTOR PROFILE ──────────────────────────────────────────────────────

  async getDoctorProfile(doctorId: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId, isVerified: true },
      include: {
        specializations: { include: { specialization: true } },
        qualifications: true,
        doctorHospitals: {
          include: { hospital: { include: { office: true } } }
        }
      }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${doctorId} not found`);

    return {
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      professionalStatement: doctor.professionalStatement,
      practicingFrom: doctor.practicingFrom,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      qualifications: doctor.qualifications.map(q => ({
        name: q.qualificationName,
        institute: q.instituteName,
        year: q.procurementYear
      })),
      practices: doctor.doctorHospitals.map(dh => ({
        doctorHospitalId: dh.id,
        isPrivate: dh.isPrivate,
        firstConsultationFee: dh.firstConsultationFee,
        followupConsultationFee: dh.followupConsultationFee,
        timeSlotPerClientInMin: dh.timeSlotPerClientInMin,
        ...(dh.isPrivate
          ? { streetAddress: dh.streetAddress, city: dh.city, state: dh.state, country: dh.country, zip: dh.zip }
          : { hospital: { name: dh.hospital?.name, city: dh.hospital?.city, state: dh.hospital?.state } }
        )
      }))
    };
  }

  // ─── VIEW AVAILABLE TIMESLOTS ─────────────────────────────────────────────────

  async getAvailableTimeSlots(doctorId: number, doctorHospitalId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id: doctorId, isVerified: true } });
    if (!doctor) throw new NotFoundException(`Doctor with id ${doctorId} not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`Practice with id ${doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctorId) throw new BadRequestException(`This practice does not belong to this doctor`);

    const now = new Date();
    return this.prisma.timeSlot.findMany({
      where: {
        doctorHospitalId,
        isBooked: false,
        startTime: { gt: now }
      },
      orderBy: { startTime: 'asc' }
    });
  }

  // ─── BOOK APPOINTMENT ────────────────────────────────────────────────────

  async bookAppointment(userId: number, dto: BookAppointmentDto) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found. Please create one first`);

    // 1. Validate specialization exists
    const specialization = await this.prisma.specialization.findUnique({ where: { id: dto.specializationId } });
    if (!specialization) throw new NotFoundException(`Specialization with id ${dto.specializationId} not found`);

    // 2. Validate doctor exists, is verified and has the specialization
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: dto.doctorId },
      include: { specializations: true }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${dto.doctorId} not found`);
    if (!doctor.isVerified) throw new BadRequestException(`Doctor is not verified`);
    const hasSpecialization = doctor.specializations.some(s => s.specializationId === dto.specializationId);
    if (!hasSpecialization) throw new BadRequestException(`Doctor does not have the selected specialization`);

    // 3. Validate DoctorHospital belongs to the doctor
    const doctorHospital = await this.prisma.doctorHospital.findUnique({
      where: { id: dto.doctorHospitalId },
      include: { hospital: true }
    });
    if (!doctorHospital) throw new NotFoundException(`Practice with id ${dto.doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== dto.doctorId) throw new BadRequestException(`This practice does not belong to the selected doctor`);

    // 4. Validate TimeSlot belongs to DoctorHospital and is available
    const timeSlot = await this.prisma.timeSlot.findUnique({ where: { id: dto.timeSlotId } });
    if (!timeSlot) throw new NotFoundException(`TimeSlot with id ${dto.timeSlotId} not found`);
    if (timeSlot.doctorHospitalId !== dto.doctorHospitalId) throw new BadRequestException(`TimeSlot does not belong to this practice`);
    if (timeSlot.isBooked) throw new BadRequestException(`TimeSlot is already booked`);
    if (timeSlot.startTime <= new Date()) throw new BadRequestException(`Cannot book a past time slot`);

    // 5. Check doctor unavailability
    const slotDate = new Date(timeSlot.startTime);
    slotDate.setUTCHours(0, 0, 0, 0);
    const slotEnd = new Date(timeSlot.endTime);

    const unavailability = await this.prisma.doctorUnavailability.findFirst({
      where: {
        doctorId: dto.doctorId,
        date: slotDate,
        OR: [
          { startTime: null, endTime: null },
          { startTime: { lte: timeSlot.startTime }, endTime: { gte: slotEnd } }
        ]
      }
    });
    if (unavailability) throw new BadRequestException(`Doctor is unavailable at this time`);

    const activeStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'ACTIVE' } });
    if (!activeStatus) throw new NotFoundException(`AppointmentStatus 'ACTIVE' not found in DB`);

    // 6. Book with race condition prevention
    return this.prisma.$transaction(async (tx) => {
      const freshSlot = await tx.timeSlot.findUnique({ where: { id: dto.timeSlotId } });
      if (!freshSlot || freshSlot.isBooked) throw new BadRequestException(`TimeSlot is already booked`);

      const appointment = await tx.appointment.create({
        data: {
          userAccountId: client.id,
          doctorHospitalId: dto.doctorHospitalId,
          timeSlotId: dto.timeSlotId,
          probableStartTime: timeSlot.startTime,
          durationInMinutes: doctorHospital.timeSlotPerClientInMin,
          appointmentStatusId: activeStatus.id,
          appointmentTakenDate: new Date()
        },
        include: { status: true, timeSlot: true, doctorHospital: { include: { doctor: true, hospital: true } } }
      });

      await tx.timeSlot.update({ where: { id: dto.timeSlotId }, data: { isBooked: true } });

      return {
        id: appointment.id,
        reason: dto.reason,
        probableStartTime: appointment.probableStartTime,
        durationInMinutes: appointment.durationInMinutes,
        appointmentTakenDate: appointment.appointmentTakenDate,
        status: appointment.status.status,
        specialization: specialization.specializationName,
        timeSlot: {
          id: appointment.timeSlot.id,
          startTime: appointment.timeSlot.startTime,
          endTime: appointment.timeSlot.endTime
        },
        doctor: {
          id: doctor.id,
          firstName: doctor.firstName,
          lastName: doctor.lastName
        },
        practice: {
          doctorHospitalId: appointment.doctorHospital.id,
          isPrivate: appointment.doctorHospital.isPrivate,
          ...(appointment.doctorHospital.isPrivate
            ? { address: `${appointment.doctorHospital.streetAddress}, ${appointment.doctorHospital.city}` }
            : { hospital: appointment.doctorHospital.hospital?.name, city: appointment.doctorHospital.hospital?.city }
          )
        }
      };
    });
  }

  // ─── CANCEL APPOINTMENT ────────────────────────────────────────────────────

  async cancelAppointment(userId: number, appointmentId: number, dto: CancelAppointmentDto) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found`);

    const appointment = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { status: true }
    });
    if (!appointment) throw new NotFoundException(`Appointment with id ${appointmentId} not found`);
    if (appointment.userAccountId !== client.id) throw new BadRequestException(`This appointment does not belong to you`);
    if (appointment.status.status === 'CANCELLED') throw new BadRequestException(`Appointment is already cancelled`);
    if (appointment.status.status === 'Completed') throw new BadRequestException(`Cannot cancel a completed appointment`);

    const cancelledStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'CANCELLED' } });
    if (!cancelledStatus) throw new NotFoundException(`AppointmentStatus 'CANCELLED' not found in DB`);

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.appointment.update({
        where: { id: appointmentId },
        data: { appointmentStatusId: cancelledStatus.id, cancellationReason: dto.reason },
        include: { status: true, timeSlot: true }
      });
      await tx.timeSlot.update({ where: { id: appointment.timeSlotId }, data: { isBooked: false } });
      return updated;
    });
  }

  // ─── RESCHEDULE APPOINTMENT ────────────────────────────────────────────────────

  async rescheduleAppointment(userId: number, appointmentId: number, dto: RescheduleAppointmentDto) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found`);

    const appointment = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { status: true }
    });
    if (!appointment) throw new NotFoundException(`Appointment with id ${appointmentId} not found`);
    if (appointment.userAccountId !== client.id) throw new BadRequestException(`This appointment does not belong to you`);
    if (appointment.status.status === 'CANCELLED') throw new BadRequestException(`Cannot reschedule a cancelled appointment`);
    if (appointment.status.status === 'Completed') throw new BadRequestException(`Cannot reschedule a completed appointment`);
    if (appointment.timeSlotId === dto.newTimeSlotId) throw new BadRequestException(`New time slot is the same as current`);

    const newSlot = await this.prisma.timeSlot.findUnique({ where: { id: dto.newTimeSlotId } });
    if (!newSlot) throw new NotFoundException(`TimeSlot with id ${dto.newTimeSlotId} not found`);
    if (newSlot.isBooked) throw new BadRequestException(`TimeSlot is already booked`);
    if (newSlot.doctorHospitalId !== appointment.doctorHospitalId) throw new BadRequestException(`New slot does not belong to the same practice`);
    if (newSlot.startTime <= new Date()) throw new BadRequestException(`Cannot reschedule to a past time slot`);

    return this.prisma.$transaction(async (tx) => {
      const freshNewSlot = await tx.timeSlot.findUnique({ where: { id: dto.newTimeSlotId } });
      if (!freshNewSlot || freshNewSlot.isBooked) throw new BadRequestException(`TimeSlot is already booked`);

      await tx.appointmentHistory.create({
        data: { appointmentId, oldTimeSlotId: appointment.timeSlotId, newTimeSlotId: dto.newTimeSlotId }
      });

      const updated = await tx.appointment.update({
        where: { id: appointmentId },
        data: { timeSlotId: dto.newTimeSlotId, probableStartTime: freshNewSlot.startTime },
        include: { status: true, timeSlot: true }
      });

      await tx.timeSlot.update({ where: { id: appointment.timeSlotId }, data: { isBooked: false } });
      await tx.timeSlot.updateMany({ where: { id: dto.newTimeSlotId, isBooked: false }, data: { isBooked: true } });

      return updated;
    });
  }

  // ─── VIEW OWN APPOINTMENTS ────────────────────────────────────────────────────

  async getOwnAppointments(userId: number) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found`);

    return this.prisma.appointment.findMany({
      where: { userAccountId: client.id },
      include: {
        doctorHospital: { include: { doctor: true, hospital: true } },
        timeSlot: true,
        status: true
      },
      orderBy: { probableStartTime: 'desc' }
    });
  }

  // ─── VIEW APPOINTMENT HISTORY ────────────────────────────────────────────────────

  async getAppointmentHistory(userId: number, appointmentId: number) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found`);

    const appointment = await this.prisma.appointment.findUnique({ where: { id: appointmentId } });
    if (!appointment) throw new NotFoundException(`Appointment with id ${appointmentId} not found`);
    if (appointment.userAccountId !== client.id) throw new BadRequestException(`This appointment does not belong to you`);

    return this.prisma.appointmentHistory.findMany({
      where: { appointmentId },
      include: {
        appointment: { include: { status: true } }
      },
      orderBy: { changedAt: 'desc' }
    });
  }
}
