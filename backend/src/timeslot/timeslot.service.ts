import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeSlotDTO } from './DTOS/CreateTimeSlotDTO';
import { UpdateTimeSlotDTO } from './DTOS/UpdateTimeSlotDTO';

@Injectable()
export class TimeslotService {

  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTimeSlotDTO) {
    return this.prisma.timeSlot.create({
      data: {
        doctorHospital: { connect: { id: dto.doctorHospitalId } },
        startTime: new Date(dto.startTime),
        endTime: new Date(dto.endTime),
        isBooked: dto.isBooked ?? false
      }
    });
  }

  findAll() {
    return this.prisma.timeSlot.findMany({
      include: {
        doctorHospital: true,
        appointments: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.timeSlot.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateTimeSlotDTO) {
    return this.prisma.timeSlot.update({
      where: { id },
      data: {
        ...(dto.doctorHospitalId && { doctorHospital: { connect: { id: dto.doctorHospitalId } } }),
        startTime: dto.startTime ? new Date(dto.startTime) : undefined,
        endTime: dto.endTime ? new Date(dto.endTime) : undefined,
        isBooked: dto.isBooked ?? false
      }
    });
  }

  remove(id: number) {
    return this.prisma.timeSlot.delete({ where: { id } });
  }
}
