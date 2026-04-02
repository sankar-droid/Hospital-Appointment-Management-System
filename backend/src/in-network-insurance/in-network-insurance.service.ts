import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInNetworkInsuranceDto } from './DTOS/createInNetworkInsuranceDTO';
import { UpdateInNetworkInsuranceDto } from './DTOS/updateInNetworkInsuranceDTO';

@Injectable()
export class InNetworkInsuranceService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.inNetworkInsurance.findMany({
      include: { doctorHospital: true }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.inNetworkInsurance.findUnique({
      where: { id },
      include: { doctorHospital: true }
    });
    if (!record) throw new NotFoundException(`InNetworkInsurance #${id} not found`);
    return record;
  }

  create(data: CreateInNetworkInsuranceDto) {
    return this.prisma.inNetworkInsurance.create({
      data: {
        doctorHospitalId: data.doctorHospitalId,
        insuranceName: data.insuranceName
      }
    });
  }

  update(id: number, data: UpdateInNetworkInsuranceDto) {
    return this.prisma.inNetworkInsurance.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.inNetworkInsurance.delete({ where: { id } });
  }
}
