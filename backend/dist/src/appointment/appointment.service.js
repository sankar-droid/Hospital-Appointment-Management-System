"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentService = class AppointmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.appointment.findMany();
    }
    findOne(id) {
        return this.prisma.appointment.findUnique({ where: { id } });
    }
    create(data) {
        return this.prisma.appointment.create({ data });
    }
    update(id, data) {
        return this.prisma.appointment.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.appointment.delete({ where: { id } });
    }
    async bookAppointment(dto) {
        const { clientId, doctorHospitalId, timeSlotId } = dto;
        const client = await this.prisma.clientAccount.findUnique({ where: { id: clientId } });
        if (!client)
            throw new common_1.NotFoundException(`Client with id ${clientId} not found`);
        const doctorHospital = await this.prisma.doctorHospital.findUnique({
            where: { id: doctorHospitalId },
            include: { doctor: true }
        });
        if (!doctorHospital)
            throw new common_1.NotFoundException(`DoctorHospital with id ${doctorHospitalId} not found`);
        const timeSlot = await this.prisma.timeSlot.findUnique({ where: { id: timeSlotId } });
        if (!timeSlot)
            throw new common_1.NotFoundException(`TimeSlot with id ${timeSlotId} not found`);
        if (!timeSlot.startTime || !timeSlot.endTime)
            throw new common_1.BadRequestException(`TimeSlot ${timeSlotId} has invalid start/end time`);
        if (timeSlot.doctorHospitalId !== doctorHospitalId)
            throw new common_1.BadRequestException(`TimeSlot ${timeSlotId} does not belong to this practice`);
        if (timeSlot.isBooked)
            throw new common_1.BadRequestException(`TimeSlot ${timeSlotId} is already booked`);
        if (!doctorHospital.doctor.isVerified)
            throw new common_1.BadRequestException(`Doctor is not verified`);
        const slotDate = new Date(timeSlot.startTime);
        slotDate.setHours(0, 0, 0, 0);
        const nextDay = new Date(slotDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const unavailability = await this.prisma.doctorUnavailability.findFirst({
            where: { doctorId: doctorHospital.doctorId, date: { gte: slotDate, lt: nextDay } }
        });
        if (unavailability)
            throw new common_1.BadRequestException(`Doctor is unavailable on ${slotDate.toDateString()}`);
        const activeStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'ACTIVE' } });
        if (!activeStatus)
            throw new common_1.NotFoundException(`AppointmentStatus 'ACTIVE' not found in DB`);
        return await this.prisma.$transaction(async (tx) => {
            const freshSlot = await tx.timeSlot.findUnique({ where: { id: timeSlotId } });
            if (!freshSlot || freshSlot.isBooked)
                throw new common_1.BadRequestException(`TimeSlot ${timeSlotId} is already booked`);
            const appointment = await tx.appointment.create({
                data: {
                    userAccountId: clientId,
                    doctorHospitalId,
                    timeSlotId,
                    probableStartTime: timeSlot.startTime,
                    durationInMinutes: doctorHospital.timeSlotPerClientInMin,
                    appointmentStatusId: activeStatus.id,
                    appointmentTakenDate: new Date()
                }
            });
            await tx.timeSlot.update({ where: { id: timeSlotId }, data: { isBooked: true } });
            return appointment;
        });
    }
    async cancelAppointment(id, dto) {
        const { reason } = dto;
        const appointment = await this.prisma.appointment.findUnique({
            where: { id },
            include: { status: true }
        });
        if (!appointment)
            throw new common_1.NotFoundException(`Appointment with id ${id} not found`);
        if (appointment.status.status === 'CANCELLED')
            throw new common_1.BadRequestException(`Appointment is already cancelled`);
        if (appointment.status.status === 'COMPLETED')
            throw new common_1.BadRequestException(`Cannot cancel a completed appointment`);
        const cancelledStatus = await this.prisma.appointmentStatus.findFirst({ where: { status: 'CANCELLED' } });
        if (!cancelledStatus)
            throw new common_1.NotFoundException(`AppointmentStatus 'CANCELLED' not found in DB`);
        return await this.prisma.$transaction(async (tx) => {
            const freshAppointment = await tx.appointment.findUnique({ where: { id }, include: { status: true } });
            if (!freshAppointment)
                throw new common_1.NotFoundException(`Appointment not found`);
            if (freshAppointment.status.status === 'CANCELLED')
                throw new common_1.BadRequestException(`Appointment is already cancelled`);
            if (freshAppointment.status.status === 'COMPLETED')
                throw new common_1.BadRequestException(`Cannot cancel a completed appointment`);
            const updated = await tx.appointment.update({
                where: { id },
                data: { appointmentStatusId: cancelledStatus.id, cancellationReason: reason },
                include: { status: true, doctorHospital: true, timeSlot: true }
            });
            await tx.timeSlot.updateMany({ where: { id: appointment.timeSlotId, isBooked: true }, data: { isBooked: false } });
            return updated;
        });
    }
    async rescheduleAppointment(id, dto) {
        const { newTimeSlotId } = dto;
        const appointment = await this.prisma.appointment.findUnique({
            where: { id },
            include: { status: true, timeSlot: true }
        });
        if (!appointment)
            throw new common_1.NotFoundException(`Appointment with id ${id} not found`);
        if (appointment.status.status === 'CANCELLED')
            throw new common_1.BadRequestException(`Cannot reschedule a cancelled appointment`);
        if (appointment.status.status === 'COMPLETED')
            throw new common_1.BadRequestException(`Cannot reschedule a completed appointment`);
        if (appointment.timeSlotId === newTimeSlotId)
            throw new common_1.BadRequestException(`New time slot is the same as the current one`);
        const newSlot = await this.prisma.timeSlot.findUnique({ where: { id: newTimeSlotId } });
        if (!newSlot)
            throw new common_1.NotFoundException(`TimeSlot with id ${newTimeSlotId} not found`);
        if (newSlot.isBooked)
            throw new common_1.BadRequestException(`TimeSlot ${newTimeSlotId} is already booked`);
        if (newSlot.doctorHospitalId !== appointment.doctorHospitalId)
            throw new common_1.BadRequestException(`New slot does not belong to the same practice`);
        const slotDate = new Date(newSlot.startTime);
        slotDate.setHours(0, 0, 0, 0);
        const nextDay = new Date(slotDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const doctorHospital = await this.prisma.doctorHospital.findUnique({ where: { id: appointment.doctorHospitalId } });
        if (!doctorHospital)
            throw new common_1.NotFoundException(`DoctorHospital not found`);
        const unavailability = await this.prisma.doctorUnavailability.findFirst({
            where: { doctorId: doctorHospital.doctorId, date: { gte: slotDate, lt: nextDay } }
        });
        if (unavailability)
            throw new common_1.BadRequestException(`Doctor is unavailable on ${slotDate.toDateString()}`);
        return await this.prisma.$transaction(async (tx) => {
            const freshAppointment = await tx.appointment.findUnique({ where: { id }, include: { status: true } });
            if (!freshAppointment)
                throw new common_1.NotFoundException(`Appointment not found`);
            if (freshAppointment.status.status === 'CANCELLED')
                throw new common_1.BadRequestException(`Cannot reschedule a cancelled appointment`);
            if (freshAppointment.status.status === 'COMPLETED')
                throw new common_1.BadRequestException(`Cannot reschedule a completed appointment`);
            const freshNewSlot = await tx.timeSlot.findUnique({ where: { id: newTimeSlotId } });
            if (!freshNewSlot || freshNewSlot.isBooked)
                throw new common_1.BadRequestException(`TimeSlot ${newTimeSlotId} is already booked`);
            await tx.appointmentHistory.create({ data: { appointmentId: id, oldTimeSlotId: appointment.timeSlotId, newTimeSlotId } });
            const updated = await tx.appointment.update({
                where: { id },
                data: { timeSlotId: newTimeSlotId, probableStartTime: freshNewSlot.startTime },
                include: { status: true, timeSlot: true, doctorHospital: true }
            });
            await tx.timeSlot.updateMany({ where: { id: appointment.timeSlotId, isBooked: true }, data: { isBooked: false } });
            const bookedSlot = await tx.timeSlot.updateMany({ where: { id: newTimeSlotId, isBooked: false }, data: { isBooked: true } });
            if (bookedSlot.count === 0)
                throw new common_1.BadRequestException(`TimeSlot ${newTimeSlotId} is already booked`);
            return updated;
        });
    }
    async getClientAppointments(clientId) {
        const client = await this.prisma.clientAccount.findUnique({ where: { id: clientId } });
        if (!client)
            throw new common_1.NotFoundException(`Client with id ${clientId} not found`);
        return this.prisma.appointment.findMany({
            where: { userAccountId: clientId },
            include: {
                doctorHospital: { include: { doctor: true, hospital: true } },
                timeSlot: true,
                status: true
            }
        });
    }
    async getDoctorAppointments(doctorId) {
        const doctor = await this.prisma.doctor.findUnique({ where: { id: doctorId } });
        if (!doctor)
            throw new common_1.NotFoundException(`Doctor with id ${doctorId} not found`);
        return this.prisma.appointment.findMany({
            where: { doctorHospital: { doctorId } },
            include: {
                client: true,
                timeSlot: true,
                status: true,
                doctorHospital: true
            }
        });
    }
    async getAppointmentDetails(id) {
        const appointment = await this.prisma.appointment.findUnique({
            where: { id },
            include: {
                client: true,
                doctorHospital: { include: { doctor: true, hospital: true } },
                timeSlot: true,
                status: true
            }
        });
        if (!appointment)
            throw new common_1.NotFoundException(`Appointment with id ${id} not found`);
        return appointment;
    }
    async getAppointmentHistory(id) {
        const appointment = await this.prisma.appointment.findUnique({ where: { id } });
        if (!appointment)
            throw new common_1.NotFoundException(`Appointment with id ${id} not found`);
        return this.prisma.appointmentHistory.findMany({ where: { appointmentId: id } });
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map