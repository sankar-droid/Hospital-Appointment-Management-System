import { PartialType } from '@nestjs/swagger';
import { CreateDoctorDto } from './createDoctorDTO';

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
