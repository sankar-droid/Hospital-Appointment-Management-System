import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDoctorSetupProfileDTO } from './DTOS/UpdateDoctorSetupProfileDTO';
import { SetupProfileDto } from './DTOS/setupProfileDto';
import { CreatePrivatePracticeDto } from '../doctor-role/DTOS/createPrivatePracticeDto';
import { UpdatePrivatePracticeDto } from '../doctor-role/DTOS/updatePrivatePracticeDto';
import { AffiliateHospitalDto } from '../doctor-role/DTOS/affiliateHospitalDto';
import { SetAvailabilityDto } from '../doctor-role/DTOS/setAvailabilityDto';
import { GenerateTimeSlotsDto } from '../doctor-role/DTOS/generateTimeSlotsDto';
import { MarkUnavailabilityDto } from '../doctor-role/DTOS/markUnavailabilityDto';
import { NotificationService } from '../notification-module/notification.service';
import {QualificationDTO} from '../doctor-role/DTOS/QualificationDTO';

@Injectable()
export class DoctorRoleService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService
  ) {}

  async setupProfile(userId: number, dto: SetupProfileDto, files: Express.Multer.File[]) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException(`User not found`);
    if (user.role !== 'doctor') throw new BadRequestException(`User does not have doctor role`);
    let doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) {
      doctor = await this.prisma.doctor.create({
        data: {
          user: { connect: { id: userId } },
          firstName:dto.firstName,
          lastName:dto.lastName,
          isVerified: false,
          createdAt:new Date(),
          updatedAt:new Date(),
		   professionalStatement: dto.professionalStatement,
          practicingFrom: dto.practicingFrom ? new Date(dto.practicingFrom) : undefined,
          verificationRequested: false, 
        }
      });
    }

    if (doctor.isVerified)
      throw new BadRequestException(`Cannot update profile of a verified doctor`);

    if (files.length === 0)
      throw new BadRequestException(`Please upload at least one document`);

    if (files.length !== dto.documentTypes.length)
      throw new BadRequestException(`Number of files must match number of document types`);

    for (const specId of dto.specializations) {
      const spec = await this.prisma.specialization.findUnique({ where: { id: specId } });
      if (!spec) throw new NotFoundException(`Specialization with id ${specId} not found`);
    }

    return await this.prisma.$transaction(async (tx) => {
      try {

      await tx.doctorSpecialization.deleteMany({ where: { doctorId: doctor.id } });
      await tx.doctorSpecialization.createMany({
        data: dto.specializations.map(specializationId => ({
          doctorId: doctor.id,
          specializationId
        }))
      });
      await tx.qualification.deleteMany({ where: { doctorId: doctor.id } });
      await tx.qualification.createMany({
        data: dto.qualifications.map((q: QualificationDTO) => ({
          doctorId: doctor.id,
          qualificationName: q.qualificationName,
          instituteName: q.instituteName,
          procurementYear: q.procurementYear ? new Date(q.procurementYear) : undefined
        }))
      });

      // 4. Skip hospital affiliations — now managed via DoctorHospital junction table
      // 5. Delete existing documents and re-upload
      await tx.doctorDocument.deleteMany({ where: { doctorId: doctor.id } });
      await tx.doctorDocument.createMany({
        data: files.map((file, index) => ({
          doctorId: doctor.id,
          documentType: dto.documentTypes[index],
          fileUrl: Buffer.from(file.buffer) as unknown as Uint8Array<ArrayBuffer>
        }))
      });

      return { message: 'Profile setup successfully. You can now request verification.' };
      } catch (e) {
        throw e;
      }
    });
  }

  // ─── GET PROFILE ─────────────────────────────────────────────────────────────

  async getProfile(userId: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: { include: { hospital: true } },
        qualifications: true,
        documents: true
      }
    });
    if (!doctor) throw new NotFoundException(`Doctor profile not found for user ${userId}`);

    return {
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      professionalStatement: doctor.professionalStatement,
      practicingFrom: doctor.practicingFrom,
      isVerified: doctor.isVerified,
      verificationRequested: doctor.verificationRequested,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      doctorHospitals: doctor.doctorHospitals,
      qualifications: doctor.qualifications.map(q => ({
        name: q.qualificationName,
        institute: q.instituteName,
        year: q.procurementYear
      })),
      documentCount: doctor.documents.length
    };
  }

  // ─── UPDATE BASIC INFO (AFTER VERIFICATION) ──────────────────────────────────

  async updateProfile(userId: number, dto: UpdateDoctorSetupProfileDTO) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found for user ${userId}`);

    const { firstName, lastName, professionalStatement, practicingFrom } = dto;
    return this.prisma.doctor.update({
      where: { userId },
      data: { firstName, lastName, professionalStatement, practicingFrom }
    });
  }

  async downloadDocument(userId: number, documentId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found for user ${userId}`);

    const document = await this.prisma.doctorDocument.findUnique({ where: { id: documentId } });
    if (!document) throw new NotFoundException(`Document with id ${documentId} not found`);

    if (document.doctorId !== doctor.id)
      throw new BadRequestException(`Document does not belong to this doctor`);

    return document;
  }

  // ─── REQUEST VERIFICATION ────────────────────────────────────────────────────

  async requestVerification(userId: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
      include: { documents: true, specializations: true, qualifications: true }
    });
    if (!doctor) throw new NotFoundException(`Doctor profile not found for user ${userId}`);

    if (doctor.isVerified)
      throw new BadRequestException(`Doctor is already verified`);

    if (doctor.verificationRequested)
      throw new BadRequestException(`Verification already requested`);

    if (doctor.documents.length === 0)
      throw new BadRequestException(`Please upload documents before requesting verification`);

    if (doctor.specializations.length === 0)
      throw new BadRequestException(`Please add at least one specialization before requesting verification`);

    if (doctor.qualifications.length === 0)
      throw new BadRequestException(`Please add at least one qualification before requesting verification`);

    return this.prisma.doctor.update({
      where: { userId },
      data: { verificationRequested: true },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        isVerified: true,
        verificationRequested: true
      }
    });
  }

  // ─── REQUEST SPECIALIZATION ─────────────────────────────────────────────────

  async requestSpecialization(userId: number, specializationId: number, file: Express.Multer.File) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    if (!doctor.isVerified)
      throw new BadRequestException(`Only verified doctors can request new specializations`);

    const specialization = await this.prisma.specialization.findUnique({ where: { id: specializationId } });
    if (!specialization) throw new NotFoundException(`Specialization not found`);

    const existing = await this.prisma.doctorSpecialization.findFirst({
      where: { doctorId: doctor.id, specializationId: specializationId }
    });
    if (existing) throw new BadRequestException(`Doctor already has this specialization`);

    if (!file) throw new BadRequestException(`Proof document is required`);

    const doc = await this.prisma.doctorDocument.create({
      data: {
        doctorId: doctor.id,
        documentType: `SPECIALIZATION_REQUEST_${specializationId}`,
        fileUrl: Buffer.from(file.buffer) as unknown as Uint8Array<ArrayBuffer>
      }
    });

    return {
      id: doc.id,
      documentType: doc.documentType,
      uploadedAt: doc.uploadedAt,
      message: `Specialization request submitted. Admin will review and approve.`
    };
  }


  async setAvailability(userId: number, dto: SetAvailabilityDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: dto.doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`DoctorHospital with id ${dto.doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    const existing = await this.prisma.officeDoctorAvailability.findFirst({
      where: { doctorHospitalId: dto.doctorHospitalId, dayOfWeek: dto.dayOfWeek }
    });
    if (existing) throw new BadRequestException(`Availability for ${dto.dayOfWeek} already set for this practice`);

    const newStart = new Date(`1970-01-01T${dto.startTime}:00.000Z`);
    const newEnd = new Date(`1970-01-01T${dto.endTime}:00.000Z`);

    if (newEnd <= newStart) throw new BadRequestException(`End time must be after start time`);

    // Check for time conflicts across all doctor's practices on the same day
    const allDoctorHospitals = await this.prisma.doctorHospital.findMany({
      where: { doctorId: doctor.id },
      select: { id: true }
    });
    const allIds = allDoctorHospitals.map(dh => dh.id);

    const conflict = await this.prisma.officeDoctorAvailability.findFirst({
      where: {
        doctorHospitalId: { in: allIds },
        dayOfWeek: dto.dayOfWeek,
        startTime: { lt: newEnd },
        endTime: { gt: newStart }
      }
    });
    if (conflict) throw new BadRequestException(`Doctor already has overlapping availability on ${dto.dayOfWeek}`);

    return this.prisma.officeDoctorAvailability.create({
      data: {
        doctorHospitalId: dto.doctorHospitalId,
        dayOfWeek: dto.dayOfWeek,
        startTime: newStart,
        endTime: newEnd,
        isAvailable: true
      }
    });
  }

  async getAvailability(userId: number, doctorHospitalId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`DoctorHospital with id ${doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    return this.prisma.officeDoctorAvailability.findMany({ where: { doctorHospitalId } });
  }

  async deleteAvailability(userId: number, availabilityId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const availability = await this.prisma.officeDoctorAvailability.findUnique({ where: { id: availabilityId } });
    if (!availability) throw new NotFoundException(`Availability with id ${availabilityId} not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: availability.doctorHospitalId } });
    if (doctorHospital?.doctorId !== doctor.id) throw new BadRequestException(`This availability does not belong to you`);

    return this.prisma.officeDoctorAvailability.delete({ where: { id: availabilityId } });
  }

  // ─── TIMESLOT GENERATION ──────────────────────────────────────────────────────

  async generateTimeSlots(userId: number, dto: GenerateTimeSlotsDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: dto.doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`DoctorHospital with id ${dto.doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    const date = new Date(dto.date);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();

    const availability = await this.prisma.officeDoctorAvailability.findFirst({
      where: { doctorHospitalId: dto.doctorHospitalId, dayOfWeek, isAvailable: true }
    });
    if (!availability) throw new BadRequestException(`No availability set for ${dayOfWeek} at this practice`);

    // Check doctor unavailability for this date
    const dayStart = new Date(dto.date);
    dayStart.setUTCHours(0, 0, 0, 0);
    const dayEnd = new Date(dto.date);
    dayEnd.setUTCHours(23, 59, 59, 999);

    const unavailability = await this.prisma.doctorUnavailability.findFirst({
      where: { doctorId: doctor.id, date: { gte: dayStart, lte: dayEnd } }
    });
    if (unavailability) throw new BadRequestException(`Doctor is marked unavailable on ${dto.date}`);

    // Generate slots
    const slotDuration = doctorHospital.timeSlotPerClientInMin;
    const startH = availability.startTime.getUTCHours();
    const startM = availability.startTime.getUTCMinutes();
    const endH = availability.endTime.getUTCHours();
    const endM = availability.endTime.getUTCMinutes();

    const slots: { startTime: Date; endTime: Date }[] = [];
    let current = startH * 60 + startM;
    const end = endH * 60 + endM;

    while (current + slotDuration <= end) {
      const slotStart = new Date(dto.date);
      slotStart.setUTCHours(Math.floor(current / 60), current % 60, 0, 0);

      const slotEnd = new Date(dto.date);
      slotEnd.setUTCHours(Math.floor((current + slotDuration) / 60), (current + slotDuration) % 60, 0, 0);

      slots.push({ startTime: slotStart, endTime: slotEnd });
      current += slotDuration;
    }

    if (slots.length === 0) throw new BadRequestException(`No slots can be generated for the given availability`);

    // Skip already existing slots for this date
    const existingSlots = await this.prisma.timeSlot.findMany({
      where: { doctorHospitalId: dto.doctorHospitalId, startTime: { gte: dayStart, lte: dayEnd } }
    });
    const existingTimes = new Set(existingSlots.map(s => s.startTime.toISOString()));
    const newSlots = slots.filter(s => !existingTimes.has(s.startTime.toISOString()));

    if (newSlots.length === 0) throw new BadRequestException(`Time slots already generated for ${dto.date}`);

    await this.prisma.timeSlot.createMany({
      data: newSlots.map(s => ({
        doctorHospitalId: dto.doctorHospitalId,
        startTime: s.startTime,
        endTime: s.endTime,
        isBooked: false
      }))
    });

    return { message: `${newSlots.length} time slots generated for ${dto.date}`, slots: newSlots };
  }

  // ─── UNAVAILABILITY ────────────────────────────────────────────────────

  async markUnavailability(userId: number, dto: MarkUnavailabilityDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const isFullDay = !dto.startTime || !dto.endTime;

    const dayStart = new Date(dto.date);
    dayStart.setUTCHours(0, 0, 0, 0);
    const dayEnd = new Date(dto.date);
    dayEnd.setUTCHours(23, 59, 59, 999);

    const rangeStart = isFullDay ? dayStart : new Date(`${dto.date}T${dto.startTime}:00.000Z`);
    const rangeEnd = isFullDay ? dayEnd : new Date(`${dto.date}T${dto.endTime}:00.000Z`);

    if (!isFullDay && rangeEnd <= rangeStart)
      throw new BadRequestException(`End time must be after start time`);

    // Get all doctor's DoctorHospital ids
    const allDoctorHospitals = await this.prisma.doctorHospital.findMany({
      where: { doctorId: doctor.id },
      select: { id: true }
    });
    const allIds = allDoctorHospitals.map(dh => dh.id);

    // Find all slots in the unavailable range
    const affectedSlots = await this.prisma.timeSlot.findMany({
      where: {
        doctorHospitalId: { in: allIds },
        startTime: { gte: rangeStart, lt: rangeEnd }
      },
      include: { appointments: { include: { status: true } } }
    });

    const cancelledStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'CANCELLED' } });
    if (!cancelledStatus) throw new NotFoundException(`AppointmentStatus 'CANCELLED' not found in DB`);

    await this.prisma.$transaction(async (tx) => {
      for (const slot of affectedSlots) {
        if (slot.isBooked) {
          // Cancel active appointments on this slot
          const affectedAppointments = await tx.appointment.findMany({
            where: { timeSlotId: slot.id, appointmentStatusId: { not: cancelledStatus.id } },
            include: { client: true, doctorHospital: { include: { doctor: true } } }
          });

          await tx.appointment.updateMany({
            where: {
              timeSlotId: slot.id,
              appointmentStatusId: { not: cancelledStatus.id }
            },
            data: {
              appointmentStatusId: cancelledStatus.id,
              cancellationReason: `Doctor unavailability: ${dto.reason || 'No reason provided'}`
            }
          });

          // Notify patients
          for (const appt of affectedAppointments) {
            await this.notificationService.notifyAppointmentCancelledByUnavailability(
              appt.client.userId,
              `${appt.doctorHospital.doctor.firstName} ${appt.doctorHospital.doctor.lastName}`,
              slot.startTime
            );
          }

          await tx.timeSlot.update({ where: { id: slot.id }, data: { isBooked: false } });
        }
        // Delete the slot
        await tx.timeSlot.delete({ where: { id: slot.id } });
      }

      // Create unavailability record
      await tx.doctorUnavailability.create({
        data: {
          doctorId: doctor.id,
          date: dayStart,
          startTime: isFullDay ? undefined : rangeStart,
          endTime: isFullDay ? undefined : rangeEnd,
          reason: dto.reason
        }
      });
    });

    const bookedCount = affectedSlots.filter(s => s.isBooked).length;
    const unbookedCount = affectedSlots.filter(s => !s.isBooked).length;

    return {
      message: `Unavailability marked for ${dto.date}${isFullDay ? ' (full day)' : ` ${dto.startTime}-${dto.endTime}`}`,
      slotsDeleted: unbookedCount,
      appointmentsCancelled: bookedCount
    };
  }

  // ─── APPOINTMENTS ────────────────────────────────────────────────────

  async getOwnAppointments(userId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    return this.prisma.appointment.findMany({
      where: { doctorHospital: { doctorId: doctor.id } },
      include: {
        client: true,
        timeSlot: true,
        status: true,
        doctorHospital: { include: { hospital: true } }
      }
    });
  }

  async completeAppointment(userId: number, appointmentId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const appointment = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { status: true, doctorHospital: true }
    });
    if (!appointment) throw new NotFoundException(`Appointment with id ${appointmentId} not found`);
    if (appointment.doctorHospital.doctorId !== doctor.id)
      throw new BadRequestException(`This appointment does not belong to you`);

    if (appointment.status.status === 'Completed')
      throw new BadRequestException(`Appointment is already completed`);
    if (appointment.status.status === 'CANCELLED')
      throw new BadRequestException(`Cannot complete a cancelled appointment`);

    const completedStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'Completed' } });
    if (!completedStatus) throw new NotFoundException(`AppointmentStatus 'Completed' not found in DB`);

    return this.prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        appointmentStatusId: completedStatus.id,
        actualEndTime: new Date()
      },
      include: { status: true, timeSlot: true, client: true }
    }).then(async (updated) => {
      await this.notificationService.notifyAppointmentCompleted(
        updated.client.userId,
        `${doctor.firstName} ${doctor.lastName}`
      );
      return updated;
    });
  }

  // ─── HOSPITAL AFFILIATION ────────────────────────────────────────────────────

  async affiliateWithHospital(userId: number, dto: AffiliateHospitalDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);
    if (!doctor.isVerified) throw new BadRequestException(`Only verified doctors can affiliate with hospitals`);

    const hospital = await this.prisma.hospital.findUnique({ where: { id: dto.hospitalId } });
    if (!hospital) throw new NotFoundException(`Hospital with id ${dto.hospitalId} not found`);

    const existing = await this.prisma.doctorHospital.findFirst({
      where: { doctorId: doctor.id, hospitalId: dto.hospitalId }
    });
    if (existing) throw new BadRequestException(`Doctor is already affiliated with this hospital`);

    return this.prisma.doctorHospital.create({
      data: {
        doctorId: doctor.id,
        hospitalId: dto.hospitalId,
        isPrivate: false,
        firstConsultationFee: dto.firstConsultationFee,
        followupConsultationFee: dto.followupConsultationFee,
        timeSlotPerClientInMin: dto.timeSlotPerClientInMin
      },
      include: { hospital: true }
    }).then(dh => ({
      id: dh.id,
      doctorId: dh.doctorId,
      hospitalId: dh.hospitalId,
      isPrivate: dh.isPrivate,
      firstConsultationFee: dh.firstConsultationFee,
      followupConsultationFee: dh.followupConsultationFee,
      timeSlotPerClientInMin: dh.timeSlotPerClientInMin,
      hospital: dh.hospital
    }));
  }

  // ─── OFFICE MANAGEMENT ──────────────────────────────────────────────────────

  async createOffice(userId: number, dto: CreatePrivatePracticeDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);
    if (!doctor.isVerified)
      throw new BadRequestException(`Only verified doctors can create practices`);

    return this.prisma.doctorHospital.create({
      data: {
        doctorId: doctor.id,
        hospitalId: null,
        isPrivate: true,
        streetAddress: dto.streetAddress,
        city: dto.city,
        state: dto.state,
        country: dto.country,
        zip: dto.zip,
        firstConsultationFee: dto.firstConsultationFee,
        followupConsultationFee: dto.followupConsultationFee,
        timeSlotPerClientInMin: dto.timeSlotPerClientInMin
      }
    }).then(dh => ({
      id: dh.id,
      doctorId: dh.doctorId,
      isPrivate: dh.isPrivate,
      streetAddress: dh.streetAddress,
      city: dh.city,
      state: dh.state,
      country: dh.country,
      zip: dh.zip,
      firstConsultationFee: dh.firstConsultationFee,
      followupConsultationFee: dh.followupConsultationFee,
      timeSlotPerClientInMin: dh.timeSlotPerClientInMin
    }));
  }


  async updatePractice(userId: number, doctorHospitalId: number, dto: Partial<CreatePrivatePracticeDto & { firstConsultationFee: number; followupConsultationFee: number; timeSlotPerClientInMin: number }>) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`Practice with id ${doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);
    if (!doctorHospital.isPrivate) throw new BadRequestException(`This is not a private practice`);


    return this.prisma.doctorHospital.update({
      where: { id: doctorHospitalId },
      data: dto
    });
  }


  async deletePractice(userId: number, doctorHospitalId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({
      where: { id: doctorHospitalId },
      include: { timeSlots: { include: { appointments: true } } }
    });
    if (!doctorHospital) throw new NotFoundException(`Practice with id ${doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    const hasActiveAppointments = doctorHospital.timeSlots.some(ts =>
      ts.appointments.some(a => a.appointmentStatusId !== null)
    );
    if (hasActiveAppointments) throw new BadRequestException(`Cannot remove practice with existing appointments`);

    return this.prisma.doctorHospital.delete({ where: { id: doctorHospitalId } });
  }

  async getOffices(userId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospitals = await this.prisma.doctorHospital.findMany({
      where: { doctorId: doctor.id },
      include: { hospital: true }
    });

    return doctorHospitals.map(dh => {
      if (dh.isPrivate) {
        return {
          id: dh.id,
          doctorId: dh.doctorId,
          isPrivate: dh.isPrivate,
          streetAddress: dh.streetAddress,
          city: dh.city,
          state: dh.state,
          country: dh.country,
          zip: dh.zip,
          firstConsultationFee: dh.firstConsultationFee,
          followupConsultationFee: dh.followupConsultationFee,
          timeSlotPerClientInMin: dh.timeSlotPerClientInMin
        };
      } else {
        return {
          id: dh.id,
          doctorId: dh.doctorId,
          hospitalId: dh.hospitalId,
          isPrivate: dh.isPrivate,
          firstConsultationFee: dh.firstConsultationFee,
          followupConsultationFee: dh.followupConsultationFee,
          timeSlotPerClientInMin: dh.timeSlotPerClientInMin,
          hospital: dh.hospital
        };
      }
    });
  }

  async getTimeSlots(userId: number, doctorHospitalId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`DoctorHospital with id ${doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    return this.prisma.timeSlot.findMany({
      where: { doctorHospitalId },
      orderBy: { startTime: 'asc' }
    });
  }
}
