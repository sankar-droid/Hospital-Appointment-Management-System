import { PartialType } from '@nestjs/mapped-types';
import { CreateOfficeDto } from './createOfficeDTO';

export class UpdateOfficeDto extends PartialType(CreateOfficeDto) {}
