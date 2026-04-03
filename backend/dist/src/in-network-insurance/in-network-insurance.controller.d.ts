import { InNetworkInsuranceService } from './in-network-insurance.service';
import { CreateInNetworkInsuranceDto } from './DTOS/createInNetworkInsuranceDTO';
import { UpdateInNetworkInsuranceDto } from './DTOS/updateInNetworkInsuranceDTO';
export declare class InNetworkInsuranceController {
    private readonly inNetworkInsuranceService;
    constructor(inNetworkInsuranceService: InNetworkInsuranceService);
    findAll(): Promise<({
        doctorHospital: {
            id: number;
            doctorId: number;
            hospitalId: number | null;
            isPrivate: boolean;
            streetAddress: string | null;
            city: string | null;
            state: string | null;
            country: string | null;
            zip: string | null;
            firstConsultationFee: number;
            followupConsultationFee: number;
            timeSlotPerClientInMin: number;
        };
    } & {
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    })[]>;
    search(name: string): Promise<({
        doctorHospital: {
            id: number;
            doctorId: number;
            hospitalId: number | null;
            isPrivate: boolean;
            streetAddress: string | null;
            city: string | null;
            state: string | null;
            country: string | null;
            zip: string | null;
            firstConsultationFee: number;
            followupConsultationFee: number;
            timeSlotPerClientInMin: number;
        };
    } & {
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    })[]>;
    findByOffice(officeId: number): Promise<({
        doctorHospital: {
            id: number;
            doctorId: number;
            hospitalId: number | null;
            isPrivate: boolean;
            streetAddress: string | null;
            city: string | null;
            state: string | null;
            country: string | null;
            zip: string | null;
            firstConsultationFee: number;
            followupConsultationFee: number;
            timeSlotPerClientInMin: number;
        };
    } & {
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    })[]>;
    findOne(id: number): Promise<{
        doctorHospital: {
            id: number;
            doctorId: number;
            hospitalId: number | null;
            isPrivate: boolean;
            streetAddress: string | null;
            city: string | null;
            state: string | null;
            country: string | null;
            zip: string | null;
            firstConsultationFee: number;
            followupConsultationFee: number;
            timeSlotPerClientInMin: number;
        };
    } & {
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
    create(userId: number, dto: CreateInNetworkInsuranceDto): Promise<{
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
    update(userId: number, id: number, dto: UpdateInNetworkInsuranceDto): Promise<{
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
    removeAllByOffice(officeId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(userId: number, id: number): Promise<{
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
}
