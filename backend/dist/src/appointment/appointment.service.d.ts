import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './DTOS/createAppointmentDTO';
import { UpdateAppointmentDto } from './DTOS/updateAppointmentDTO';
import { BookAppointmentDto } from './DTOS/bookAppointmentDTO';
import { CancelAppointmentDto } from './DTOS/cancelAppointmentDTO';
import { RescheduleAppointmentDto } from './DTOS/rescheduleAppointmentDTO';
export declare class AppointmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(data: CreateAppointmentDto): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateAppointmentDto): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    bookAppointment(dto: BookAppointmentDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }>;
    cancelAppointment(id: number, dto: CancelAppointmentDto): Promise<{
        status: {
            id: number;
            status: string;
        };
        doctorHospital: {
            id: number;
            doctorId: number;
            city: string | null;
            country: string | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string | null;
            state: string | null;
            zip: string | null;
            hospitalId: number | null;
            isPrivate: boolean;
        };
        timeSlot: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            startTime: Date;
            endTime: Date;
            isBooked: boolean;
            doctorHospitalId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }>;
    rescheduleAppointment(id: number, dto: RescheduleAppointmentDto): Promise<{
        status: {
            id: number;
            status: string;
        };
        doctorHospital: {
            id: number;
            doctorId: number;
            city: string | null;
            country: string | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string | null;
            state: string | null;
            zip: string | null;
            hospitalId: number | null;
            isPrivate: boolean;
        };
        timeSlot: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            startTime: Date;
            endTime: Date;
            isBooked: boolean;
            doctorHospitalId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }>;
    getClientAppointments(clientId: number): Promise<({
        status: {
            id: number;
            status: string;
        };
        doctorHospital: {
            doctor: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                userId: number;
                firstName: string;
                lastName: string;
                professionalStatement: string | null;
                practicingFrom: Date | null;
                isVerified: boolean;
                verificationRequested: boolean;
            };
            hospital: {
                id: number;
                city: string;
                country: string;
                streetAddress: string;
                state: string;
                zip: string;
                officeId: number;
                name: string;
            } | null;
        } & {
            id: number;
            doctorId: number;
            city: string | null;
            country: string | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string | null;
            state: string | null;
            zip: string | null;
            hospitalId: number | null;
            isPrivate: boolean;
        };
        timeSlot: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            startTime: Date;
            endTime: Date;
            isBooked: boolean;
            doctorHospitalId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    })[]>;
    getDoctorAppointments(doctorId: number): Promise<({
        status: {
            id: number;
            status: string;
        };
        doctorHospital: {
            id: number;
            doctorId: number;
            city: string | null;
            country: string | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string | null;
            state: string | null;
            zip: string | null;
            hospitalId: number | null;
            isPrivate: boolean;
        };
        timeSlot: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            startTime: Date;
            endTime: Date;
            isBooked: boolean;
            doctorHospitalId: number;
        };
        client: {
            id: number;
            email: string;
            userId: number;
            firstName: string;
            lastName: string;
            contactNumber: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    })[]>;
    getAppointmentDetails(id: number): Promise<{
        status: {
            id: number;
            status: string;
        };
        doctorHospital: {
            doctor: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                userId: number;
                firstName: string;
                lastName: string;
                professionalStatement: string | null;
                practicingFrom: Date | null;
                isVerified: boolean;
                verificationRequested: boolean;
            };
            hospital: {
                id: number;
                city: string;
                country: string;
                streetAddress: string;
                state: string;
                zip: string;
                officeId: number;
                name: string;
            } | null;
        } & {
            id: number;
            doctorId: number;
            city: string | null;
            country: string | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string | null;
            state: string | null;
            zip: string | null;
            hospitalId: number | null;
            isPrivate: boolean;
        };
        timeSlot: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            startTime: Date;
            endTime: Date;
            isBooked: boolean;
            doctorHospitalId: number;
        };
        client: {
            id: number;
            email: string;
            userId: number;
            firstName: string;
            lastName: string;
            contactNumber: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userAccountId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        doctorHospitalId: number;
    }>;
    getAppointmentHistory(id: number): Promise<{
        id: number;
        appointmentId: number;
        oldTimeSlotId: number;
        newTimeSlotId: number;
        changedAt: Date;
    }[]>;
}
