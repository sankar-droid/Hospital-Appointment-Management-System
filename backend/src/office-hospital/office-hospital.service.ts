import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfficeDto } from '../office/DTOS/createOfficeDTO';
import { CreateHospitalDto } from './DTOS/createHospitalDto';

@Injectable()
export class OfficeHospitalService {

  constructor(private readonly prisma: PrismaService) {}

  // ─── OFFICE ───────────────────────────────────────────────────────────────────

  async createOffice(dto: CreateOfficeDto) {
    return this.prisma.office.create({ data: dto });
  }

  async getAllOffices() {
    return this.prisma.office.findMany({ include: { hospitals: true } });
  }

  async getOfficeById(id: number) {
    const office = await this.prisma.office.findUnique({
      where: { id },
      include: { hospitals: true }
    });
    if (!office) throw new NotFoundException(`Office with id ${id} not found`);
    return office;
  }

  // ─── HOSPITAL ─────────────────────────────────────────────────────────────────

  async createHospital(officeId: number, dto: CreateHospitalDto) {
    const office = await this.prisma.office.findUnique({ where: { id: officeId } });
    if (!office) throw new NotFoundException(`Office with id ${officeId} not found`);

    return this.prisma.hospital.create({ data: { ...dto, officeId } });
  }

  async getHospitalsByOffice(officeId: number) {
    const office = await this.prisma.office.findUnique({ where: { id: officeId } });
    if (!office) throw new NotFoundException(`Office with id ${officeId} not found`);

    return this.prisma.hospital.findMany({ where: { officeId } });
  }

  async getHospitalById(id: number) {
    const hospital = await this.prisma.hospital.findUnique({
      where: { id },
      include: { office: true, doctorHospitals: { include: { doctor: true } } }
    });
    if (!hospital) throw new NotFoundException(`Hospital with id ${id} not found`);
    return hospital;
  }
}
