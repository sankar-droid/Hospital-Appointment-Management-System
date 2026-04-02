import { IsInt, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  userAccountId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  timeSlotId: number;

  @ApiProperty({ example: '2026-04-01T10:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  probableStartTime: Date;

  @ApiProperty({ example: 30 })
  @IsInt()
  @IsNotEmpty()
  durationInMinutes: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  appointmentStatusId: number;

  @ApiProperty({ example: '2026-03-30T09:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  appointmentTakenDate: Date;
}
