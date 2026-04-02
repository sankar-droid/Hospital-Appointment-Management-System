import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {

  constructor(private readonly prisma: PrismaService) {}

  // ─── USER MANAGEMENT ─────────────────────────────────────────────────────────

  async getAllUsers() {
    const users = await this.prisma.user.findMany();
    return users.map(user => ({
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt
    }));
  }

  async deactivateUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    if (!user.isActive) throw new BadRequestException(`User with id ${id} is already deactivated`);

    const updated = await this.prisma.user.update({ where: { id }, data: { isActive: false } });
    return { id: updated.id, email: updated.email, role: updated.role, isActive: updated.isActive };
  }

  async activateUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    if (user.isActive) throw new BadRequestException(`User with id ${id} is already active`);

    const updated = await this.prisma.user.update({ where: { id }, data: { isActive: true } });
    return { id: updated.id, email: updated.email, role: updated.role, isActive: updated.isActive };
  }

  // ─── DOCTOR MANAGEMENT ───────────────────────────────────────────────────────

  async getAllDoctors() {
    const doctors = await this.prisma.doctor.findMany({
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: true,
        documents: true
      }
    });

    return doctors.map(doctor => ({
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      isVerified: doctor.isVerified,
      verificationRequested: doctor.verificationRequested,
      documentCount: doctor.documents.length,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      doctorHospitals: doctor.doctorHospitals
    }));
  }

  async getPendingDoctors() {
    const doctors = await this.prisma.doctor.findMany({
      where: { verificationRequested: true, isVerified: false },
      include: {
        specializations: { include: { specialization: true } },
        documents: true,
        doctorHospitals: true
      }
    });

    return doctors.map(doctor => ({
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      isVerified: doctor.isVerified,
      verificationRequested: doctor.verificationRequested,
      documentCount: doctor.documents.length,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      doctorHospitals: doctor.doctorHospitals
    }));
  }

  async getDoctorById(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: { include: { hospital: true } },
        documents: true,
        qualifications: true
      }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);

    return {
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      isVerified: doctor.isVerified,
      verificationRequested: doctor.verificationRequested,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      doctorHospitals: doctor.doctorHospitals,
      documentCount: doctor.documents.length,
      qualifications: doctor.qualifications.map(q => ({
        name: q.qualificationName,
        institute: q.instituteName,
        year: q.procurementYear
      }))
    };
  }

  async verifyDoctor(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      select: { id: true, firstName: true, lastName: true, isVerified: true, verificationRequested: true, documents: true }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);
    if (doctor.isVerified) throw new BadRequestException(`Doctor with id ${id} is already verified`);
    if (!doctor.verificationRequested) throw new BadRequestException(`Doctor has not requested verification yet`);
    if (doctor.documents.length === 0) throw new BadRequestException(`Doctor must upload documents before verification`);

    const updated = await this.prisma.doctor.updateMany({ where: { id, isVerified: false }, data: { isVerified: true } });
    if (updated.count === 0) throw new BadRequestException(`Doctor is already verified`);

    return { id: doctor.id, firstName: doctor.firstName, lastName: doctor.lastName, isVerified: true, verifiedAt: new Date() };
  }

  // ─── APPOINTMENT MANAGEMENT ──────────────────────────────────────────────────

  async getAllAppointments() {
    return this.prisma.appointment.findMany({
      include: {
        client: true,
        doctorHospital: { include: { doctor: true, hospital: true } },
        timeSlot: true,
        status: true
      }
    });
  }

  async getAppointmentById(id: number) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        client: true,
        doctorHospital: { include: { doctor: true, hospital: true } },
        timeSlot: true,
        status: true,
        history: true
      }
    });
    if (!appointment) throw new NotFoundException(`Appointment with id ${id} not found`);
    return appointment;
  }

  // ─── PATIENT MANAGEMENT ──────────────────────────────────────────────────────

  async getAllPatients() {
    const patients = await this.prisma.clientAccount.findMany({ include: { user: true } });
    return patients.map(patient => ({
      id: patient.id,
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      contactNumber: patient.contactNumber,
      isActive: patient.user.isActive
    }));
  }

  async getPatientById(id: number) {
    const patient = await this.prisma.clientAccount.findUnique({
      where: { id },
      include: {
        user: true,
        appointments: {
          include: {
            status: true,
            timeSlot: true,
            doctorHospital: { include: { doctor: true, hospital: true } }
          }
        }
      }
    });
    if (!patient) throw new NotFoundException(`Patient with id ${id} not found`);

    return {
      id: patient.id,
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      contactNumber: patient.contactNumber,
      isActive: patient.user.isActive,
      appointments: patient.appointments
    };
  }

  // ─── SPECIALIZATION REQUESTS ─────────────────────────────────────────────────

  async getSpecializationRequests() {
    const documents = await this.prisma.doctorDocument.findMany({
      where: { documentType: { startsWith: 'SPECIALIZATION_REQUEST_' } },
      include: { doctor: true }
    });

    return documents.map(doc => ({
      documentId: doc.id,
      doctorId: doc.doctorId,
      doctorName: `${doc.doctor.firstName} ${doc.doctor.lastName}`,
      specializationId: parseInt(doc.documentType.replace('SPECIALIZATION_REQUEST_', '')),
      uploadedAt: doc.uploadedAt
    }));
  }

  async approveSpecialization(doctorId: number, specializationId: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id: doctorId } });
    if (!doctor) throw new NotFoundException(`Doctor not found`);

    const specialization = await this.prisma.specialization.findUnique({ where: { id: specializationId } });
    if (!specialization) throw new NotFoundException(`Specialization not found`);

    const requestDoc = await this.prisma.doctorDocument.findFirst({
      where: { doctorId, documentType: `SPECIALIZATION_REQUEST_${specializationId}` }
    });
    if (!requestDoc) throw new BadRequestException(`No specialization request found for this doctor and specialization`);

    const existing = await this.prisma.doctorSpecialization.findFirst({ where: { doctorId, specializationId } });
    if (existing) throw new BadRequestException(`Doctor already has this specialization`);

    return this.prisma.doctorSpecialization.create({ data: { doctorId, specializationId } });
  }
}
