import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { AppointmentHistoryService } from './appointment-history.service';
import { CreateAppointmentHistoryDto } from './DTOS/createAppointmentHistoryDTO';
import { UpdateAppointmentHistoryDto } from './DTOS/updateAppointmentHistoryDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('appointment-history')
@UseGuards(AuthGuard)
export class AppointmentHistoryController {

  constructor(private readonly appointmentHistoryService: AppointmentHistoryService) {}

  @Get()
  async findAll() {
    return await this.appointmentHistoryService.findAll();
  }

  @Get(':id')
  @Roles(Role.Patient,Role.Doctor)
  @UseGuards(RoleGuard)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.appointmentHistoryService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateAppointmentHistoryDto) {
    return await this.appointmentHistoryService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() dto: UpdateAppointmentHistoryDto) {
    return await this.appointmentHistoryService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.appointmentHistoryService.remove(id);
  }
}
