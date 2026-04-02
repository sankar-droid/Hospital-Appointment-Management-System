import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookAppointmentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  clientId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  timeSlotId: number;
}
