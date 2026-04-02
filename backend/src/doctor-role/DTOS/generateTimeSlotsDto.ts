import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateTimeSlotsDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: '2026-04-07', description: 'Date in YYYY-MM-DD format' })
  @IsString()
  @IsNotEmpty()
  date: string;
}
