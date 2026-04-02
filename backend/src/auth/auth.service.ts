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
       if(!user.isActive)
       {
        throw new UnauthorizedException("Your account has been deactivated. Please contact admin");
       }
       const matched=await bcrypt.compare(dto.password,user.password);
       if(matched)
       {
		const payload = {
		  sub: user.id,
		  email: user.email,
		  roles: Array.isArray(user.role) ? user.role.map((r) => r.toLowerCase()) : [user.role.toLowerCase()],
		};
        return {
		    access_token: await this.jwtservice.signAsync(payload),
		};

       }
       else
       {
        throw new UnauthorizedException("Password does not match");
       }
    }	
	
}
