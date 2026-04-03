import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalAffiliationDto } from './createHospitalAffiliationDTO';

export class UpdateHospitalAffiliationDto extends PartialType(CreateHospitalAffiliationDto) {}
