import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CancelAppointmentDto {
  @ApiProperty({ example: 'Not available' })
  @IsString()
  @IsNotEmpty()
  reason: string;
}
