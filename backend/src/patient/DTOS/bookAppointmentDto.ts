import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookAppointmentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  specializationId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @IsNotEmpty()
  doctorId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: 8 })
  @IsInt()
  @IsNotEmpty()
  timeSlotId: number;

  @ApiProperty({ example: 'Chest pain', required: false })
  @IsString()
  @IsOptional()
  reason?: string;
}
