import { IsInt } from 'class-validator';

export class CreateDoctorSpecializationDto {
  @IsInt() doctorId: number;
  @IsInt() specializationId: number;
}
