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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    create(userId: number, dto: CreateInNetworkInsuranceDto): Promise<{
=======
    create(dto: CreateInNetworkInsuranceDto): Promise<{
>>>>>>> Stashed changes
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
<<<<<<< Updated upstream
    update(userId: number, id: number, dto: UpdateInNetworkInsuranceDto): Promise<{
=======
    update(id: number, dto: UpdateInNetworkInsuranceDto): Promise<{
>>>>>>> Stashed changes
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
<<<<<<< Updated upstream
    remove(userId: number, id: number): Promise<{
=======
    removeAllByOffice(officeId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: number): Promise<{
>>>>>>> Stashed changes
        id: number;
        doctorHospitalId: number;
        insuranceName: string;
    }>;
}
