import { InNetworkInsuranceService } from './in-network-insurance.service';
import { CreateInNetworkInsuranceDto } from './DTOS/createInNetworkInsuranceDTO';
import { UpdateInNetworkInsuranceDto } from './DTOS/updateInNetworkInsuranceDTO';
export declare class InNetworkInsuranceController {
    private readonly inNetworkInsuranceService;
    constructor(inNetworkInsuranceService: InNetworkInsuranceService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    remove(userId: number, id: number): Promise<{
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
}
