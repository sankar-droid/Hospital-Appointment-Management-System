import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {

  @ApiProperty({ example: 'Mounika' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'B' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'Experienced doctor', required: false })
  @IsString()
  @IsOptional()
  professionalStatement?: string;

  @ApiProperty({ example: '2020-01-01T00:00:00.000Z', required: false })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  practicingFrom?: Date;
}
