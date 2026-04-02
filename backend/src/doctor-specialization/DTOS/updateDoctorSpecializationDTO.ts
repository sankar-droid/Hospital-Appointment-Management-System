import { PartialType } from '@nestjs/swagger';
import { CreateDoctorSpecializationDto } from './createDoctorSpecializationDTO';

export class UpdateDoctorSpecializationDto extends PartialType(CreateDoctorSpecializationDto) {}
