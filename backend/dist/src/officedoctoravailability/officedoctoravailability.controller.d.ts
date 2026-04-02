import { createofficedoctoravailabilityDTO } from './DTOS/creareofficedoctoravailabilityDTO';
import { UpdateOfficeDoctorAvailabilityDTO } from './DTOS/updateofficedoctoravailabilityDTO';
import { OfficedoctoravailabilityService } from './officedoctoravailability.service';
export declare class OfficedoctoravailabilityController {
    private readonly service;
    constructor(service: OfficedoctoravailabilityService);
    create(dto: createofficedoctoravailabilityDTO): Promise<{
        id: number;
        reason: string | null;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        doctorHospitalId: number;
    }>;
    findAll(officeId: number): Promise<{
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
