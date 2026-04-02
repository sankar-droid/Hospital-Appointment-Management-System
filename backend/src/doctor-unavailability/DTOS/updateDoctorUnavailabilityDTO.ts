import { PartialType } from '@nestjs/swagger';
import { CreateDoctorUnavailabilityDto } from './createDoctorUnavailabilityDTO';

export class UpdateDoctorUnavailabilityDto extends PartialType(CreateDoctorUnavailabilityDto) {}
