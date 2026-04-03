import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorSpecializationDto } from './createDoctorSpecializationDTO';

export class UpdateDoctorSpecializationDto extends PartialType(CreateDoctorSpecializationDto) {}
