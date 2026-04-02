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
}
