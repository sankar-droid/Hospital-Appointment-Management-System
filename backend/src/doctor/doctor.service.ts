import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto } from './DTOS/createDoctorDTO';
import { UpdateDoctorDto } from './DTOS/updateDoctorDTO';

@Injectable()
export class DoctorService {

  constructor(private readonly prisma: PrismaService) {}

  // ─── ADMIN ONLY ───────────────────────────────────────────────────────────────

  async findAll() {
    return this.prisma.doctor.findMany();
  }

  async remove(id: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id } });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);
    return this.prisma.doctor.delete({ where: { id } });
  }

  // ─── BUSINESS LOGIC ───────────────────────────────────────────────────────────

  // GET /doctors — all verified doctors with flattened specializations and offices
  async getVerifiedDoctors() {
    const doctors = await this.prisma.doctor.findMany({
      where: { isVerified: true },
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: true
      }
    });

    return doctors.map(doctor => ({
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      professionalStatement: doctor.professionalStatement,
      practicingFrom: doctor.practicingFrom,
      doctorHospitals: doctor.doctorHospitals,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName)
    }));
  }

  // GET /doctors/:id — full doctor profile
  async getDoctorProfile(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        specializations: { include: { specialization: true } },
        doctorHospitals: { include: { hospital: true } },
        qualifications: true
      }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);

    return {
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      professionalStatement: doctor.professionalStatement,
      practicingFrom: doctor.practicingFrom,
      isVerified: doctor.isVerified,
      specializations: doctor.specializations.map(ds => ds.specialization.specializationName),
      doctorHospitals: doctor.doctorHospitals,
      qualifications: doctor.qualifications.map(q => ({
        name: q.qualificationName,
        institute: q.instituteName,
        year: q.procurementYear
      }))
    };
  }

  // POST /doctors — create doctor with validations
  async create(data: CreateDoctorDto, userId: number) {
    // 1. Check user exists
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException(`User with id ${userId} not found`);

    // 2. Check user role is doctor
    if (user.role !== 'doctor')
      throw new BadRequestException(`User with id ${userId} does not have doctor role`);

    // 3. Check no duplicate doctor for same user
    const existing = await this.prisma.doctor.findUnique({ where: { userId } });
    if (existing)
      throw new BadRequestException(`Doctor already exists for user with id ${userId}`);

    return this.prisma.doctor.create({
      data: {
        ...data,
        userId,
        isVerified: false
      }
    });
  }

  // PATCH /doctors/:id/verify — admin only
  async verifyDoctor(id: number) {

    // 1. Fetch doctor with only needed fields + documents
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        isVerified: true,
        documents: true
      }
    });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);

    // 2. Check not already verified
    if (doctor.isVerified)
      throw new BadRequestException(`Doctor with id ${id} is already verified`);

    // 3. Check documents exist
    if (doctor.documents.length === 0)
      throw new BadRequestException(`Doctor must upload documents before verification`);

    // 4. Concurrency-safe update
    const updated = await this.prisma.doctor.updateMany({
      where: { id, isVerified: false },
      data: { isVerified: true }
    });

    if (updated.count === 0)
      throw new BadRequestException(`Doctor is already verified`);

    // 5. Return clean response
    return {
      id: doctor.id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      isVerified: true,
      verifiedAt: new Date()
    };
  }
  async update(id: number, data: UpdateDoctorDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id } });
    if (!doctor) throw new NotFoundException(`Doctor with id ${id} not found`);

    const { firstName, lastName, professionalStatement, practicingFrom } = data;
    return this.prisma.doctor.update({
      where: { id },
      data: { firstName, lastName, professionalStatement, practicingFrom }
    });
  }
}
