import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MarkUnavailabilityDto {
  @ApiProperty({ example: '2026-04-06' })
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ example: '10:00', required: false, description: 'If not provided, full day unavailability' })
  @IsString()
  @IsOptional()
  startTime?: string;

  @ApiProperty({ example: '12:00', required: false, description: 'If not provided, full day unavailability' })
  @IsString()
  @IsOptional()
  endTime?: string;

  @ApiProperty({ example: 'Personal appointment', required: false })
  @IsString()
  @IsOptional()
  reason?: string;
}
