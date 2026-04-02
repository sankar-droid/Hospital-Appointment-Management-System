import { IsString, IsNotEmpty, IsOptional, IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class QualificationDto {
  @ApiProperty({ example: 'MBBS' })
  @IsString()
  @IsNotEmpty()
  qualificationName: string;

  @ApiProperty({ example: 'AIIMS' })
  @IsString()
  @IsNotEmpty()
  instituteName: string;

  @ApiProperty({ example: '2015-01-01T00:00:00.000Z', required: false })
  @IsOptional()
  procurementYear?: string;
}

export class HospitalAffiliationDto {
  @ApiProperty({ example: 'Apollo Hospital' })
  @IsString()
  @IsNotEmpty()
  hospitalName: string;

  @ApiProperty({ example: 'Hyderabad' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'India' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: '2016-01-01T00:00:00.000Z', required: false })
  @IsOptional()
  startDate?: string;

  @ApiProperty({ example: '2020-01-01T00:00:00.000Z', required: false })
  @IsOptional()
  endDate?: string;
}

export class SetupProfileDto {
  @ApiProperty({ example: 'Mounika' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'B' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'Experienced cardiologist', required: false })
  @IsString()
  @IsOptional()
  professionalStatement?: string;

  @ApiProperty({ example: '2020-01-01T00:00:00.000Z', required: false })
  @IsString()
  @IsOptional()
  practicingFrom?: string;

  @ApiProperty({ example: '[1, 2]', description: 'JSON array of specialization ids' })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try { return JSON.parse(value).map(Number); } catch { return value.split(',').map(Number); }
    }
    return Array.isArray(value) ? value.map(Number) : value;
  })
  @IsArray()
  @IsInt({ each: true })
  specializations: number[];

  @ApiProperty({ example: '[{"qualificationName":"MBBS","instituteName":"AIIMS"}]' })
  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @IsArray()
  qualifications: any[];

  @ApiProperty({ example: '[{"hospitalName":"Apollo","city":"Hyderabad","country":"India"}]', required: false })
  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @IsArray()
  @IsOptional()
  hospitalAffiliations?: any[];

  @ApiProperty({ example: '["License", "Degree"]', description: 'Document types for each uploaded file' })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try { return JSON.parse(value); } catch { return value.split(',').map((s: string) => s.trim()); }
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  documentTypes: string[];
}
