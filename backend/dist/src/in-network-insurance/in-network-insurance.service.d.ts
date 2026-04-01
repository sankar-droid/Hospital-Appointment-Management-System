import { PrismaService } from '../prisma/prisma.service';
import { CreateInNetworkInsuranceDto } from './DTOS/createInNetworkInsuranceDTO';
import { UpdateInNetworkInsuranceDto } from './DTOS/updateInNetworkInsuranceDTO';
export declare class InNetworkInsuranceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        office: {
            id: number;
            doctorId: number;
            city: string;
            country: string;
            hospitalAffiliationId: number | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string;
            state: string;
            zip: string;
        };
    } & {
        officeId: number;
        id: number;
        insuranceName: string;
    })[]>;
    findOne(id: number): Promise<{
        office: {
            id: number;
            doctorId: number;
            city: string;
            country: string;
            hospitalAffiliationId: number | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string;
            state: string;
            zip: string;
        };
    } & {
        officeId: number;
        id: number;
        insuranceName: string;
    }>;
    create(data: CreateInNetworkInsuranceDto): Promise<{
        officeId: number;
        id: number;
        insuranceName: string;
    }>;
    update(id: number, data: UpdateInNetworkInsuranceDto): Promise<{
        officeId: number;
        id: number;
        insuranceName: string;
    }>;
    remove(id: number): Promise<{
        officeId: number;
        id: number;
        insuranceName: string;
    }>;
    findByOffice(officeId: number): Promise<{
        officeId: number;
        id: number;
        insuranceName: string;
    }[]>;
    search(name: string): Promise<({
        office: {
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
            };
        } & {
            id: number;
            doctorId: number;
            city: string;
            country: string;
            hospitalAffiliationId: number | null;
            timeSlotPerClientInMin: number;
            firstConsultationFee: number;
            followupConsultationFee: number;
            streetAddress: string;
            state: string;
            zip: string;
        };
    } & {
        officeId: number;
        id: number;
        insuranceName: string;
    })[]>;
    removeAllByOffice(officeId: number): Promise<{
        deleted: number;
        message: string;
    }>;
}
