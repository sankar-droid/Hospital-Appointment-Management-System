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
import { Role } from './role.enum';
import { user } from './user.decorator';
@Controller('auth')
@ApiBearerAuth('JWT-auth')
export class AuthController {
	
	constructor(private readonly service:AuthService,private readonly usersService:UsersService)
	{}
	@Public()
	@Post('/create-patient')
	@UseFilters(new CustomExceptionFilter())
	create(@Body() dto:CreateUserDTO)
	{
	   return this.usersService.createUser(dto,Role.Patient);	
	}

	@Public()
	@Post('/create-doctor')
	@UseFilters(new CustomExceptionFilter())
	createdoctor(@Body() dto:CreateUserDTO)
	{
	   return this.usersService.createUser(dto,Role.Doctor);	
	}
	
	@Patch('/update')
	@UseFilters(new CustomExceptionFilter())
	@UseGuards(AuthGuard)
	update(@user('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number,@Body()dto:UpdateUserDTO)
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
