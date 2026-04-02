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
}
