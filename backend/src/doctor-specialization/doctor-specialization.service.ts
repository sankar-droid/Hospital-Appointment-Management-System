import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorSpecializationDto } from './DTOS/createDoctorSpecializationDTO';
import { UpdateDoctorSpecializationDto } from './DTOS/updateDoctorSpecializationDTO';

@Injectable()
export class DoctorSpecializationService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.doctorSpecialization.findMany({ include: { doctor: true, specialization: true } });
  }

  async findOne(id: number) {
    const record = await this.prisma.doctorSpecialization.findUnique({ where: { id }, include: { doctor: true, specialization: true } });
    if (!record) throw new NotFoundException(`DoctorSpecialization #${id} not found`);
    return record;
  }

  findByDoctor(doctorId: number) {
    return this.prisma.doctorSpecialization.findMany({ where: { doctorId }, include: { specialization: true } });
  }

  findDoctorsBySpecialization(specializationId: number) {
    return this.prisma.doctorSpecialization.findMany({ where: { specializationId }, include: { doctor: true } });
  }

  create(data: CreateDoctorSpecializationDto) {
    return this.prisma.doctorSpecialization.create({ data });
  }

  update(id: number, data: UpdateDoctorSpecializationDto) {
    return this.prisma.doctorSpecialization.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.doctorSpecialization.delete({ where: { id } });
  }

  removeByDoctorAndSpecialization(doctorId: number, specializationId: number) {
    return this.prisma.doctorSpecialization.deleteMany({ where: { doctorId, specializationId } });
  }
}
