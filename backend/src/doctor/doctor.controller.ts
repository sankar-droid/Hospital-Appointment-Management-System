import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './DTOS/createDoctorDTO';
import { UpdateDoctorDto } from './DTOS/updateDoctorDTO';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('doctor')
@UseGuards(AuthGuard)

export class DoctorController {

  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  async findAll() {
    return await this.doctorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorService.findOne(id);
  }

  @Post()
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  async create(@Body() dto: CreateDoctorDto) {
    return await this.doctorService.create(dto);
  }

  @Patch(':id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() dto: UpdateDoctorDto) {
    return await this.doctorService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorService.remove(id);
  }
}
