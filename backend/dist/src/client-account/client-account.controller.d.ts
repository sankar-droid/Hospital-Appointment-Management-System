import { ClientAccountService } from './client-account.service';
import { CreateClientAccountDto } from './DTOS/createClientAccountDTO';
import { UpdateClientAccountDto } from './DTOS/updateClientAccountDTO';
export declare class ClientAccountController {
    private readonly clientAccountService;
    constructor(clientAccountService: ClientAccountService);
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
    create(dto: CreateClientAccountDto): Promise<{
        id: number;
        email: string;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
    }>;
    update(id: number, dto: UpdateClientAccountDto): Promise<{
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
