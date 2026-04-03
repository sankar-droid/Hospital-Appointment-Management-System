import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HospitalAffiliationService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.hospital.findMany({
      include: { office: true, doctorHospitals: true }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.hospital.findUnique({
      where: { id },
      include: { office: true, doctorHospitals: true }
    });
    if (!record) throw new NotFoundException(`Hospital #${id} not found`);
    return record;
  }

  create(data: any) {
    return this.prisma.hospital.create({
      data: {
        officeId: data.officeId,
        name: data.name,
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        country: data.country,
        zip: data.zip
      }
    });
  }

  update(id: number, data: any) {
    return this.prisma.hospital.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.hospital.delete({ where: { id } });
  }

  findByOffice(officeId: number) {
    return this.prisma.hospital.findMany({
      where: { officeId },
      include: { doctorHospitals: true }
    });
  }

  search(city?: string, country?: string) {
    return this.prisma.hospital.findMany({
      where: {
        ...(city && { city: { contains: city } }),
        ...(country && { country: { contains: country } })
      },
      include: { office: true, doctorHospitals: true }
    });
  }

  findByDoctor(doctorId: number) {
    return this.prisma.doctorHospital.findMany({
      where: { doctorId },
      include: { hospital: true }
    });
  }

  findActiveByDoctor(doctorId: number) {
    return this.prisma.doctorHospital.findMany({
      where: { doctorId, hospital: { isNot: null } },
      include: { hospital: true }
    });
  }
}
