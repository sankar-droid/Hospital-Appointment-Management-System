import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeSlotDto } from './DTOS/createTimeSlotDTO';
import { UpdateTimeSlotDto } from './DTOS/updateTimeSlotDTO';

@Injectable()
export class TimeSlotService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.timeSlot.findMany();
  }

  findOne(id: number) {
    return this.prisma.timeSlot.findUnique({ where: { id } });
  }

  create(data: CreateTimeSlotDto) {
    return this.prisma.timeSlot.create({
      data: {
        doctorHospitalId: data.doctorHospitalId,
        startTime: data.startTime,
        endTime: data.endTime,
        isBooked: data.isBooked ?? false
      }
    });
  }

  update(id: number, data: UpdateTimeSlotDto) {
    return this.prisma.timeSlot.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.timeSlot.delete({ where: { id } });
  }
}
