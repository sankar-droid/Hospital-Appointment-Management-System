import { createofficedoctoravailabilityDTO } from './DTOS/creareofficedoctoravailabilityDTO';
import { UpdateOfficeDoctorAvailabilityDTO } from './DTOS/updateofficedoctoravailabilityDTO';
import { OfficedoctoravailabilityService } from './officedoctoravailability.service';
export declare class OfficedoctoravailabilityController {
    private readonly service;
    constructor(service: OfficedoctoravailabilityService);
    create(dto: createofficedoctoravailabilityDTO): Promise<{
        officeId: number;
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
    } | import("@nestjs/common").BadRequestException>;
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
