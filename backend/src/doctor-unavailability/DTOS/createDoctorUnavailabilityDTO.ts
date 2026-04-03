import { IsInt, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateDoctorUnavailabilityDto {
  @IsInt() doctorId: number;
  @IsDateString() date: string;
  @IsOptional() @IsString() reason?: string;
}
