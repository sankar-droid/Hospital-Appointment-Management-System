import { IsString } from 'class-validator';

export class CreateOfficeDto {
  @IsString() name: string;
  @IsString() city: string;
  @IsString() state: string;
  @IsString() country: string;
}
