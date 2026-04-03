import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorUnavailabilityDto } from './createDoctorUnavailabilityDTO';

export class UpdateDoctorUnavailabilityDto extends PartialType(CreateDoctorUnavailabilityDto) {}
