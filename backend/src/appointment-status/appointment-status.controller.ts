import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { AppointmentStatusService } from './appointment-status.service';
import { CreateAppointmentStatusDto } from './DTOS/createAppointmentStatusDTO';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@ApiBearerAuth()
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller('appointment-status')
export class AppointmentStatusController {

  constructor(private readonly appointmentStatusService: AppointmentStatusService) {}

  @Get()
  findAll() {
    return this.appointmentStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.appointmentStatusService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAppointmentStatusDto) {
    return this.appointmentStatusService.create(dto);
  }
}
