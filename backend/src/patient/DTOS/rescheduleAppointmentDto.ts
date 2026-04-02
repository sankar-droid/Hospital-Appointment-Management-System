import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RescheduleAppointmentDto {
  @ApiProperty({ example: 2 })
  @IsInt()
  @IsNotEmpty()
  newTimeSlotId: number;
}
