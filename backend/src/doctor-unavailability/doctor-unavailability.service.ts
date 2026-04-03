import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorUnavailabilityDto } from './DTOS/createDoctorUnavailabilityDTO';
import { UpdateDoctorUnavailabilityDto } from './DTOS/updateDoctorUnavailabilityDTO';

@Injectable()
export class DoctorUnavailabilityService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.doctorUnavailability.findMany({ include: { doctor: true } });
  }

  async findOne(id: number) {
    const record = await this.prisma.doctorUnavailability.findUnique({ where: { id }, include: { doctor: true } });
    if (!record) throw new NotFoundException(`DoctorUnavailability #${id} not found`);
    return record;
  }

  findByDoctor(doctorId: number) {
    return this.prisma.doctorUnavailability.findMany({ where: { doctorId } });
  }

  findUpcoming(doctorId: number) {
    return this.prisma.doctorUnavailability.findMany({ where: { doctorId, date: { gte: new Date() } } });
  }

  async checkUnavailability(doctorId: number, date: string) {
    const record = await this.prisma.doctorUnavailability.findFirst({ where: { doctorId, date: new Date(date) } });
    return { isUnavailable: !!record };
  }

  create(data: CreateDoctorUnavailabilityDto) {
    return this.prisma.doctorUnavailability.create({ data: { ...data, date: new Date(data.date) } });
  }

  update(id: number, data: UpdateDoctorUnavailabilityDto) {
    return this.prisma.doctorUnavailability.update({ where: { id }, data: { ...data, ...(data.date && { date: new Date(data.date) }) } });
  }

  remove(id: number) {
    return this.prisma.doctorUnavailability.delete({ where: { id } });
  }

  clearPast(doctorId: number) {
    return this.prisma.doctorUnavailability.deleteMany({ where: { doctorId, date: { lt: new Date() } } });
  }
}
