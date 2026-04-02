import { PartialType } from '@nestjs/swagger';
import { CreateClientAccountDto } from './createClientAccountDTO';

export class UpdateClientAccountDto extends PartialType(CreateClientAccountDto) {}
