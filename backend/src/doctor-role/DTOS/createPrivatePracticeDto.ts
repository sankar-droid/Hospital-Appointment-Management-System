import { IsInt, IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivatePracticeDto {
  @ApiProperty({ example: 30 })
  @IsInt()
  @IsNotEmpty()
  timeSlotPerClientInMin: number;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsNotEmpty()
  firstConsultationFee: number;

  @ApiProperty({ example: 300 })
  @IsNumber()
  @IsNotEmpty()
  followupConsultationFee: number;

  @ApiProperty({ example: '123 Main St' })
  @IsString()
  @IsNotEmpty()
  streetAddress: string;

  @ApiProperty({ example: 'Hyderabad' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Telangana' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: 'India' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: '500001' })
  @IsString()
  @IsNotEmpty()
  zip: string;
}
