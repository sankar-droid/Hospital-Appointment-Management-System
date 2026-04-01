import { Controller,Post,Body,Patch,ParseIntPipe,Param,UseGuards,Request,Get} from '@nestjs/common';
import {CreateUserDTO} from '../users/DTOS/CreateUserDTO';
import {UpdateUserDTO} from '../users/DTOS/UpdateUserDTO';
import { UsersService } from '../users/users.service';
import { UseFilters } from '@nestjs/common';
import { CustomExceptionFilter } from 'src/CustomExceptionFilter';
import { HttpStatus } from '@nestjs/common';
import {LoginDTO} from './DTOS/LoginDTO';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { Public } from './auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
@ApiBearerAuth('JWT-auth')
export class AuthController {
	
	constructor(private readonly service:AuthService,private readonly usersService:UsersService)
	{}
	@Public()
	@Post('/create')
	@UseFilters(new CustomExceptionFilter())
	create(@Body() dto:CreateUserDTO)
	{
	   return this.usersService.createUser(dto);	
	}
	
	@Patch('/update/:id')
	@UseFilters(new CustomExceptionFilter())
	@UseGuards(AuthGuard)
	update(@Param('id',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number,dto:UpdateUserDTO)
	{
       return this.usersService.updateUser(id,dto);	
	
	}
	
	@Public()
	@Post('/login')
	@UseFilters(new CustomExceptionFilter())
	login(@Body() dto:LoginDTO)
	{
		return this.service.Login(dto);
	}
	@UseGuards(AuthGuard)
	@Get('profile')
	getProfile(@Request() req)
	
	{
		return req.user;
		
	}
}
