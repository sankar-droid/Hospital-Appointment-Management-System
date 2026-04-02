import { PartialType } from '@nestjs/swagger';
import { CreateDoctorDocumentDto } from './createDoctorDocumentDTO';

export class UpdateDoctorDocumentDto extends PartialType(CreateDoctorDocumentDto) {}
