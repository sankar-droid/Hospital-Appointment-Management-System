import { PartialType } from '@nestjs/swagger';
import { CreateHospitalAffiliationDto } from './createHospitalAffiliationDTO';

export class UpdateHospitalAffiliationDto extends PartialType(CreateHospitalAffiliationDto) {}
