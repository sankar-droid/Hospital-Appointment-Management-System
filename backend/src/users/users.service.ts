import { Injectable,BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO} from './DTOS/CreateUserDTO';
import { UpdateUserDTO } from './DTOS/UpdateUserDTO';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor(private readonly prisma:PrismaService)
    {
       
    }
    async createUser(dto:CreateUserDTO,role:string):Promise<User>
    {
        const check =await this.prisma.user.findFirst({
            where:{
                email:dto.email,
                
            }
        });
        if(check)
        {
            throw new BadRequestException( "User already exists");
        }
		
		const salt=await bcrypt.genSalt();
		dto.password=await bcrypt.hash(dto.password,salt);

		const created=await this.prisma.user.create(
		{
		   data:{
              ...dto,
			  role:role,
			  isActive:true,
			  createdAt:new Date(),
			  updatedAt:new Date()
		    
		   },		   
			
		}
		);
		
		return created;
        
    }
	
	async updateUser(id:number,dto:UpdateUserDTO)
	{
        
		const salt=await bcrypt.genSalt();
		if(dto.password)
		{
			dto.password=await bcrypt.hash(dto.password,salt);
		}
		return await this.prisma.user.update(
		{
		   where:{id},
           data:{
              
			  ...dto,
			  updatedAt:new Date()
		   },			   
		}
		
		);
		 
		
	}


}
