import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDocumentDto } from './DTOS/createDoctorDocumentDTO';
import { UpdateDoctorDocumentDto } from './DTOS/updateDoctorDocumentDTO';

@Injectable()
export class DoctorDocumentService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.doctorDocument.findMany();
  }

  findOne(id: number) {
    return this.prisma.doctorDocument.findUnique({ where: { id } });
  }

  create(data: CreateDoctorDocumentDto) {
    return this.prisma.doctorDocument.create({
      data: {
        documentType: data.documentType,
        fileUrl: Buffer.alloc(0),
        doctor: { connect: { id: 0 } }
      }
    });
  }

  update(id: number, data: UpdateDoctorDocumentDto) {
    return this.prisma.doctorDocument.update({
      where: { id },
      data: {
        ...(data.documentType && { documentType: data.documentType })
      }
    });
  }

  remove(id: number) {
    return this.prisma.doctorDocument.delete({ where: { id } });
  }
}
