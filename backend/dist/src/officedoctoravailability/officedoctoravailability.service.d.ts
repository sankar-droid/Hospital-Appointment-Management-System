import { BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createofficedoctoravailabilityDTO } from './DTOS/creareofficedoctoravailabilityDTO';
import { UpdateOfficeDoctorAvailabilityDTO } from './DTOS/updateofficedoctoravailabilityDTO';
export declare class OfficedoctoravailabilityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: createofficedoctoravailabilityDTO): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    } | BadRequestException>;
    findAll(officeId: number): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    }[]>;
    findOne(id: number): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    }>;
    update(id: number, dto: UpdateOfficeDoctorAvailabilityDTO): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    }>;
    remove(id: number): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    }>;
}
