import { Controller,Get,Post,Patch,Delete,Body,Param,ParseIntPipe, UseGuards } from '@nestjs/common';
import {CreateQualificationDTO} from './DTOS/CreateQualificationDTO';
import {UpdateQualificationDTO} from './DTOS/UpdateQualificationDTO';
import { QualificationService } from './qualification.service';
import { UseFilters } from '@nestjs/common';
import { CustomExceptionFilter } from 'src/CustomExceptionFilter';
import { HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { Role } from 'src/auth/role.enum';
@Controller('qualification')
@UseGuards(AuthGuard)
export class QualificationController {
	constructor(private readonly qualificationService:QualificationService)
	{}
	
	  @Post()
	  @Roles(Role.Doctor)
	  @UseGuards(RoleGuard)
	  @UseFilters(new CustomExceptionFilter())

	  create(@Body() dto: CreateQualificationDTO) {
		return this.qualificationService.create(dto);
	  }

	  @Get()
	  @UseFilters(new CustomExceptionFilter())
	  findAll() {
		return this.qualificationService.findAll();
	  }

	  @Get(':id')
	  @UseFilters(new CustomExceptionFilter())
	  findOne(@Param('id',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number) {
		return this.qualificationService.findOne(id);
	  }

	  @Patch(':id')
	    @Roles(Role.Doctor)
	  @UseGuards(RoleGuard)
	  @UseFilters(new CustomExceptionFilter())
	  update(
		@Param('id',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number,
		@Body() dto: UpdateQualificationDTO,
	  ) {
		return this.qualificationService.update(id, dto);
	  }

	  @Delete(':id')
	    @Roles(Role.Doctor)
	  @UseGuards(RoleGuard)
	  @UseFilters(new CustomExceptionFilter())
	  remove(@Param('id',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number) {
		return this.qualificationService.remove(id);
	  }
	
	
}
