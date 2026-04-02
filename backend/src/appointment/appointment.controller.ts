import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './DTOS/createAppointmentDTO';
import { UpdateAppointmentDto } from './DTOS/updateAppointmentDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('appointment')
@UseGuards(AuthGuard)
export class AppointmentController {

  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  async findAll() {
    return await this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.appointmentService.findOne(id);
  }

  @Post('/create-patient')
  @Roles(Role.Patient)
  @UseGuards(RoleGuard)
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
  
    return await this.appointmentService.create(createAppointmentDto);
  }

  @Patch(':id')
  @Roles(Role.Doctor,Role.Patient)
  @UseGuards(RoleGuard)
  async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() data: UpdateAppointmentDto) {
    return await this.appointmentService.update(id, data);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.appointmentService.remove(id);
  }
}
