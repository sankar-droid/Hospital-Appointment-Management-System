import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientAccountDto } from './DTOS/createClientAccountDTO';
import { UpdateClientAccountDto } from './DTOS/updateClientAccountDTO';
export declare class ClientAccountService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    } | null>;
    create(data: CreateClientAccountDto): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    }>;
    update(id: number, data: UpdateClientAccountDto): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    }>;
}
