import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfficeDto } from './DTOS/createOfficeDTO';
import { UpdateOfficeDto } from './DTOS/updateOfficeDTO';

@Injectable()
export class OfficeService {

  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.office.findMany({
      include: { hospitals: true }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.office.findUnique({
      where: { id },
      include: { hospitals: true }
    });
    if (!record) throw new NotFoundException(`Office #${id} not found`);
    return record;
  }

  async create(data: CreateOfficeDto) {
    return this.prisma.office.create({
      data: {
        name: data.name,
        city: data.city,
        state: data.state,
        country: data.country
      }
    });
  }

  async update(id: number, data: UpdateOfficeDto) {
    return this.prisma.office.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.office.delete({ where: { id } });
  }

  async search(city?: string, state?: string, country?: string, maxFee?: number) {
    return this.prisma.office.findMany({
      where: {
        ...(city && { city: { contains: city } }),
        ...(state && { state: { contains: state } }),
        ...(country && { country: { contains: country } }),
        ...(maxFee !== undefined && {
          hospitals: {
            some: {
              doctorHospitals: {
                some: { firstConsultationFee: { lte: maxFee } }
              }
            }
          }
        })
      },
      include: { hospitals: true }
    });
  }

  async findByDoctor(doctorId: number) {
    return this.prisma.doctorHospital.findMany({
      where: { doctorId },
      include: { hospital: { include: { office: true } } }
    });
  }

  async getAvailability(id: number) {
    return this.prisma.officeDoctorAvailability.findMany({
      where: { doctorHospital: { hospital: { officeId: id } } },
      include: { doctorHospital: true }
    });
  }

  async getAvailableTimeSlots(id: number, date: string) {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);
    return this.prisma.timeSlot.findMany({
      where: {
        isBooked: false,
        startTime: { gte: start, lt: end },
        doctorHospital: { hospital: { officeId: id } }
      }
    });
  }

  async getInsurances(id: number) {
    return this.prisma.inNetworkInsurance.findMany({
      where: { doctorHospital: { hospital: { officeId: id } } },
      include: { doctorHospital: true }
    });
  }
}
