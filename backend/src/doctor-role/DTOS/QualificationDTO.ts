import { IsInt,IsString,IsNotEmpty } from "class-validator";

export class QualificationDTO{

   @IsInt()
   doctorId:number;
   
   @IsString()
   @IsNotEmpty()
   qualificationName:string;
   
   @IsString()
   @IsNotEmpty()
   instituteName:string;
   
   @IsString()
   @IsNotEmpty()
   procurementYear:string;
   
   	
	
	
	
}