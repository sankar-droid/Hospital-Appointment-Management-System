import { BadRequestException, Injectable,UnauthorizedException } from '@nestjs/common';
import {LoginDTO} from './DTOS/LoginDTO';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import {JwtService} from "@nestjs/jwt";
@Injectable()
export class AuthService {
	
    constructor(private readonly prisma:PrismaService,private readonly jwtservice:JwtService)
	{
    
    }
    async Login(dto:LoginDTO):Promise<{access_token:string}>
	{
       
	   const user=await this.prisma.user.findFirst({
        where:{
            email:dto.email
        }
       })
       if(!user)
       {
        throw new BadRequestException("User does not exist");
       }
       const matched=await bcrypt.compare(dto.password,user.password);
       if(matched)
       {
		const payload={sub:user.id,email:user.email}
        return {
		    access_token:await this.jwtservice.signAsync(payload),
		};

       }
       else
       {
        throw new UnauthorizedException("Password does not match");
       }
    }	
	
}
