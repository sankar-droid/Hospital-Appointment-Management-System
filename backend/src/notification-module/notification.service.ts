import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationService {

  constructor(private readonly prisma: PrismaService) {}

  private async notify(userId: number, message: string) {
    return this.prisma.notification.create({ data: { userId, message } });
  }

  // ─── TRIGGERS ─────────────────────────────────────────────────────────────────

  async notifyAppointmentBooked(patientUserId: number, doctorUserId: number, doctorName: string, patientName: string, hospitalName: string, date: Date) {
    const formattedDate = date.toUTCString();
    await this.notify(patientUserId, `Your appointment with Dr. ${doctorName} at ${hospitalName} on ${formattedDate} has been booked`);
    await this.notify(doctorUserId, `New appointment booked by ${patientName} on ${formattedDate}`);
  }

  async notifyAppointmentCancelledByPatient(patientUserId: number, doctorUserId: number, doctorName: string, patientName: string, date: Date) {
    const formattedDate = date.toUTCString();
    await this.notify(patientUserId, `Your appointment with Dr. ${doctorName} on ${formattedDate} has been cancelled`);
    await this.notify(doctorUserId, `Appointment with ${patientName} on ${formattedDate} has been cancelled by the patient`);
  }

  async notifyAppointmentCancelledByUnavailability(patientUserId: number, doctorName: string, date: Date) {
    const formattedDate = date.toUTCString();
    await this.notify(patientUserId, `Your appointment with Dr. ${doctorName} on ${formattedDate} has been cancelled due to doctor unavailability`);
  }

  async notifyAppointmentRescheduled(patientUserId: number, doctorUserId: number, doctorName: string, patientName: string, newDate: Date) {
    const formattedDate = newDate.toUTCString();
    await this.notify(patientUserId, `Your appointment with Dr. ${doctorName} has been rescheduled to ${formattedDate}`);
    await this.notify(doctorUserId, `Appointment with ${patientName} has been rescheduled to ${formattedDate}`);
  }

  async notifyAppointmentCompleted(patientUserId: number, doctorName: string) {
    await this.notify(patientUserId, `Your appointment with Dr. ${doctorName} has been completed`);
  }

  async notifyDoctorVerified(doctorUserId: number) {
    await this.notify(doctorUserId, `Your profile has been verified. You can now start accepting appointments`);
  }

  // ─── VIEW & READ ──────────────────────────────────────────────────────────────

  async getNotifications(userId: number) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async markAsRead(userId: number, notificationId: number) {
    const notification = await this.prisma.notification.findUnique({ where: { id: notificationId } });
    if (!notification) throw new Error(`Notification not found`);
    if (notification.userId !== userId) throw new Error(`This notification does not belong to you`);

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true }
    });
  }
}
