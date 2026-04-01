import { Controller,Post,Get,Patch,Param,Delete,Body,ParseIntPipe, UseFilters, HttpStatus, UseGuards } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { CreateSpecializationDto } from './DTOS/CreateSpecializationDto';
import { UpdateSpecializationDto } from './DTOS/UpdateSpecializationDto';
import { CustomExceptionFilter } from 'src/CustomExceptionFilter';
import { RoleGuard } from 'src/auth/role.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('specialization')
@UseGuards(AuthGuard)
export class SpecializationController {

  constructor(private readonly service: SpecializationService) {}

  @Post()
    @Roles(Role.Doctor)
      @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  create(@Body() dto: CreateSpecializationDto) {
    return this.service.create(dto);
  }

  @Get()
  @UseFilters(new CustomExceptionFilter())
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @UseFilters(new CustomExceptionFilter())
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
      }))id:number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
    @Roles(Role.Doctor)
      @UseGuards(RoleGuard)
    @UseFilters(new CustomExceptionFilter())
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
        }))id:number,
    @Body() dto: UpdateSpecializationDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
    @Roles(Role.Doctor)
	  @UseGuards(RoleGuard)
    @UseFilters(new CustomExceptionFilter())
  remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
      }))id:number) {
    return this.service.remove(id);
  }
}
