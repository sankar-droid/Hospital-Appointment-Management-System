import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createofficedoctoravailabilityDTO } from './DTOS/creareofficedoctoravailabilityDTO';
import { UpdateOfficeDoctorAvailabilityDTO } from './DTOS/updateofficedoctoravailabilityDTO';

@Injectable()
export class OfficedoctoravailabilityService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: createofficedoctoravailabilityDTO) {
    if (dto.start_time >= dto.end_time) {
      throw new BadRequestException('Start time must be less than end time');
    }

    const overlap = await this.prisma.officeDoctorAvailability.findFirst({
      where: {
        doctorHospitalId: dto.office_id,
        dayOfWeek: dto.day_of_week,
        startTime: { lt: dto.end_time },
        endTime: { gt: dto.start_time }
      }
    });

    if (overlap) throw new BadRequestException('Time overlaps with existing slot');

    return this.prisma.officeDoctorAvailability.create({
      data: {
        doctorHospital: { connect: { id: dto.office_id } },
        dayOfWeek: dto.day_of_week,
        startTime: dto.start_time,
        endTime: dto.end_time,
        isAvailable: dto.is_available ?? true,
        reason: dto.reason_of_unavailability ?? ' '
      }
    });
  }

  async findAll(doctorHospitalId: number) {
    return this.prisma.officeDoctorAvailability.findMany({
      where: { doctorHospitalId },
      orderBy: { dayOfWeek: 'asc' }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.officeDoctorAvailability.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Availability not found');
    return record;
  }

  async update(id: number, dto: UpdateOfficeDoctorAvailabilityDTO) {
    await this.findOne(id);

    if (dto.start_time && dto.end_time) {
      if (dto.start_time >= dto.end_time) throw new BadRequestException('Invalid time range');
    }

    return this.prisma.officeDoctorAvailability.update({
      where: { id },
      data: {
        ...(dto.office_id && { doctorHospital: { connect: { id: dto.office_id } } }),
        dayOfWeek: dto.day_of_week,
        startTime: dto.start_time,
        endTime: dto.end_time,
        isAvailable: dto.is_available ?? true,
        reason: dto.reason_of_unavailability ?? ' '
      }
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.officeDoctorAvailability.delete({ where: { id } });
  }
}
