import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentHistoryService {

  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.appointmentHistory.findMany({
      include: { appointment: { include: { status: true } } },
      orderBy: { changedAt: 'desc' }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.appointmentHistory.findUnique({
      where: { id },
      include: { appointment: { include: { status: true } } }
    });
    if (!record) throw new NotFoundException(`AppointmentHistory #${id} not found`);
    return record;
  }

  async findByAppointment(userId: number, appointmentId: number) {
    const client = await this.prisma.clientAccount.findUnique({ where: { userId } });
    if (!client) throw new NotFoundException(`Client account not found`);

    const appointment = await this.prisma.appointment.findUnique({ where: { id: appointmentId } });
    if (!appointment) throw new NotFoundException(`Appointment with id ${appointmentId} not found`);
    if (appointment.userAccountId !== client.id) throw new BadRequestException(`This appointment does not belong to you`);

    return this.prisma.appointmentHistory.findMany({
      where: { appointmentId },
      include: { appointment: { include: { status: true } } },
      orderBy: { changedAt: 'desc' }
    });
  }
}
