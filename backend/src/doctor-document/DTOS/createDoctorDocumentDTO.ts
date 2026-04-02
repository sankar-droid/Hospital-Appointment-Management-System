import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDocumentDto {
  @ApiProperty({ example: 'License' })
  @IsString()
  @IsNotEmpty()
  documentType: string;
}
