import {CanActivate, ExecutionContext,Injectable,UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {Request} from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './auth.decorator';

@Injectable()
export class AuthGuard implements CanActivate{
   
   constructor(private readonly jwtService:JwtService,private readonly reflector:Reflector)
   {}
    
   async canActivate(context:ExecutionContext):Promise<boolean>{
     const isPublic=this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY,[
       context.getHandler(),
       context.getClass()
     ]);
     if(isPublic)
     {
       return true;
     }
        const request=context.switchToHttp().getRequest();
        console.log(request.headers.authorization);
        const token=this.extractedTokenFromHeader(request);
        if(!token)
		{
             throw new UnauthorizedException();
        }
        try{
             
			  const payload=await this.jwtService.verifyAsync(token);
			  request['user']=payload;
			  console.log(request['user']);

        }catch
        {
              throw new UnauthorizedException();
        }
        
        return true;		
  	  
   }
   private extractedTokenFromHeader(request:Request):string|undefined{
<<<<<<< HEAD
        const[type,token]=request.headers.authorization?.split(' ')??[];
        return type=='Bearer' ? token:undefined;        
 		 
=======
        const authHeader = request.headers.authorization;
        if (!authHeader) return undefined;
     
        if (authHeader.startsWith('Bearer ')) {
            return authHeader.substring(7);
        }
     
        return authHeader;
>>>>>>> 4c4f145936696722883b9e289f250958efcf6967
   }
	   
    
	
}