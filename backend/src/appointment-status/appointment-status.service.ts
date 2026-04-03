import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentStatusDto } from './DTOS/createAppointmentStatusDTO';

@Injectable()
export class AppointmentStatusService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.appointmentStatus.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.appointmentStatus.findUnique({ where: { id } });
    if (!record) throw new NotFoundException(`AppointmentStatus #${id} not found`);
    return record;
  }

  create(data: CreateAppointmentStatusDto) {
    return this.prisma.appointmentStatus.create({ data });
  }
}
