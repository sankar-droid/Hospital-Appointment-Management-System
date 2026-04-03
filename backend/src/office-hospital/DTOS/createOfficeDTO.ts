import { IsString,IsNotEmpty } from "class-validator";
export class CreateOfficeDTO{

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    state:string;

    @IsString()
    @IsNotEmpty()
    country:string;
}