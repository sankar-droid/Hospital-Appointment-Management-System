import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class SearchDoctorsDto {
  @ApiProperty({ example: 1, required: false, description: 'Specialization id' })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  specializationId?: number;

  @ApiProperty({ example: 'Hyderabad', required: false })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ example: 500, required: false, description: 'Max first consultation fee' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  maxFee?: number;
}
