import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AffiliateHospitalDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  hospitalId: number;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsNotEmpty()
  firstConsultationFee: number;

  @ApiProperty({ example: 300 })
  @IsNumber()
  @IsNotEmpty()
  followupConsultationFee: number;

  @ApiProperty({ example: 30 })
  @IsInt()
  @IsNotEmpty()
  timeSlotPerClientInMin: number;
}
