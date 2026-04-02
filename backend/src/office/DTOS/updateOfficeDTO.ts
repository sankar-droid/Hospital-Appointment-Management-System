import { PartialType } from '@nestjs/swagger';
import { CreateOfficeDto } from './createOfficeDTO';

export class UpdateOfficeDto extends PartialType(CreateOfficeDto) {}
