import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfficeDTO } from './DTOS/createOfficeDTO';
import { CreateHospitalDto } from './DTOS/createHospitalDto';

@Injectable()
export class OfficeHospitalService {

  constructor(private readonly prisma: PrismaService) {}

  // ─── OFFICE ───────────────────────────────────────────────────────────────────

  async createOffice(dto: CreateOfficeDTO) {
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


  async updateOffice(id: number, dto: Partial<CreateOfficeDTO>) {
    const office = await this.prisma.office.findUnique({ where: { id } });
    if (!office) throw new NotFoundException(`Office with id ${id} not found`);
    return this.prisma.office.update({ where: { id }, data: dto });
  }


  async deleteOffice(id: number) {
    const office = await this.prisma.office.findUnique({
      where: { id },
      include: { hospitals: { include: { doctorHospitals: true } } }
    });
    if (!office) throw new NotFoundException(`Office with id ${id} not found`);
    const hasAffiliatedDoctors = office.hospitals.some(h => h.doctorHospitals.length > 0);
    if (hasAffiliatedDoctors) throw new BadRequestException(`Cannot delete office with affiliated doctors`);
    return this.prisma.office.delete({ where: { id } });
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


  async updateHospital(id: number, dto: Partial<CreateHospitalDto>) {
    const hospital = await this.prisma.hospital.findUnique({ where: { id } });
    if (!hospital) throw new NotFoundException(`Hospital with id ${id} not found`);
    return this.prisma.hospital.update({ where: { id }, data: dto });
  }


  async deleteHospital(id: number) {
    const hospital = await this.prisma.hospital.findUnique({
      where: { id },
      include: { doctorHospitals: true }
    });
    if (!hospital) throw new NotFoundException(`Hospital with id ${id} not found`);
    if (hospital.doctorHospitals.length > 0)
      throw new BadRequestException(`Cannot delete hospital with affiliated doctors`);
    return this.prisma.hospital.delete({ where: { id } });
  }

}
