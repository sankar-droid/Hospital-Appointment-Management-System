import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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

  async create(userId: number, data: CreateInNetworkInsuranceDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: data.doctorHospitalId } });
    if (!doctorHospital) throw new NotFoundException(`Practice with id ${data.doctorHospitalId} not found`);
    if (doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This practice does not belong to you`);

    return this.prisma.inNetworkInsurance.create({
      data: { doctorHospitalId: data.doctorHospitalId, insuranceName: data.insuranceName }
    });
  }

  async update(userId: number, id: number, data: UpdateInNetworkInsuranceDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const record = await this.prisma.inNetworkInsurance.findUnique({
      where: { id },
      include: { doctorHospital: true }
    });
    if (!record) throw new NotFoundException(`InNetworkInsurance #${id} not found`);
    if (record.doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This record does not belong to you`);

    return this.prisma.inNetworkInsurance.update({ where: { id }, data });
  }

  async remove(userId: number, id: number) {
    const doctor = await this.prisma.doctor.findUnique({ where: { userId } });
    if (!doctor) throw new NotFoundException(`Doctor profile not found`);

    const record = await this.prisma.inNetworkInsurance.findUnique({
      where: { id },
      include: { doctorHospital: true }
    });
    if (!record) throw new NotFoundException(`InNetworkInsurance #${id} not found`);
    if (record.doctorHospital.doctorId !== doctor.id) throw new BadRequestException(`This record does not belong to you`);

    return this.prisma.inNetworkInsurance.delete({ where: { id } });
  }
}
