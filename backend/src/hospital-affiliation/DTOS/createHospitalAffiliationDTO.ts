import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateHospitalAffiliationDto {
  @IsInt() officeId: number;
  @IsString() name: string;
  @IsString() streetAddress: string;
  @IsString() city: string;
  @IsOptional() @IsString() state?: string;
  @IsString() country: string;
  @IsOptional() @IsString() zip?: string;
}
