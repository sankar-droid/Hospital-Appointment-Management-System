import { PrismaService } from 'src/prisma/prisma.service';
import { createofficedoctoravailabilityDTO } from './DTOS/creareofficedoctoravailabilityDTO';
import { UpdateOfficeDoctorAvailabilityDTO } from './DTOS/updateofficedoctoravailabilityDTO';
export declare class OfficedoctoravailabilityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: createofficedoctoravailabilityDTO): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }>;
    findAll(doctorHospitalId: number): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }>;
    update(id: number, dto: UpdateOfficeDoctorAvailabilityDTO): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }>;
}
