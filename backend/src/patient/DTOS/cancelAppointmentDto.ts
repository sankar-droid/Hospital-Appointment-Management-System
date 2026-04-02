import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CancelAppointmentDto {
  @ApiProperty({ example: 'Schedule conflict' })
  @IsString()
  @IsNotEmpty()
  reason: string;
}
