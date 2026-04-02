import { IsInt, IsDateString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeSlotDTO {
  @ApiProperty({ example: 1 })
  @IsInt()
  doctorHospitalId: number;

  @ApiProperty({ example: '2026-04-10T10:00:00.000Z' })
  @IsDateString()
  startTime: string;

  @ApiProperty({ example: '2026-04-10T10:30:00.000Z' })
  @IsDateString()
  endTime: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  isBooked?: boolean;
}
