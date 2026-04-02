import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInNetworkInsuranceDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  doctorHospitalId: number;

  @ApiProperty({ example: 'BlueCross' })
  @IsString()
  @IsNotEmpty()
  insuranceName: string;
}
