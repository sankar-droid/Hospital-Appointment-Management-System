import { Controller, Get, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { AppointmentHistoryService } from './appointment-history.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller('appointment-history')
export class AppointmentHistoryController {

  constructor(private readonly appointmentHistoryService: AppointmentHistoryService) {}

  @Get()
  findAll() {
    return this.appointmentHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.appointmentHistoryService.findOne(id);
  }
}
