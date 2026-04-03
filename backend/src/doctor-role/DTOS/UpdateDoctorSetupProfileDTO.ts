import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDoctorSetupProfileDTO {
  @ApiProperty({ example: 'Mounika', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'B', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: 'Experienced cardiologist', required: false })
  @IsString()
  @IsOptional()
  professionalStatement?: string;

  @ApiProperty({ example: '2020-01-01T00:00:00.000Z', required: false })
  @IsOptional()
  practicingFrom?: Date;
}
