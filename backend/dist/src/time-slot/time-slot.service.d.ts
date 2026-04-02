import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeSlotDto } from './DTOS/createTimeSlotDTO';
import { UpdateTimeSlotDto } from './DTOS/updateTimeSlotDTO';
export declare class TimeSlotService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        doctorHospitalId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TimeSlotClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        doctorHospitalId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(data: CreateTimeSlotDto): import(".prisma/client").Prisma.Prisma__TimeSlotClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateTimeSlotDto): import(".prisma/client").Prisma.Prisma__TimeSlotClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TimeSlotClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        doctorHospitalId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
