import { IsInt, IsDate, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeSlotDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: '2026-04-10T10:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  startTime: Date;

  @ApiProperty({ example: '2026-04-10T10:30:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  endTime: Date;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  isBooked?: boolean;
}
