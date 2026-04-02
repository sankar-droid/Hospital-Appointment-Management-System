import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './DTOS/createAppointmentDTO';
import { UpdateAppointmentDto } from './DTOS/updateAppointmentDTO';
import { BookAppointmentDto } from './DTOS/bookAppointmentDTO';
import { CancelAppointmentDto } from './DTOS/cancelAppointmentDTO';
import { RescheduleAppointmentDto } from './DTOS/rescheduleAppointmentDTO';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard, RoleGuard)
@Controller('appointments')
export class AppointmentController {

  constructor(private readonly appointmentService: AppointmentService) {}

  // ─── BUSINESS LOGIC ENDPOINTS ────────────────────────────────────────────────

  // POST /appointments/book
  @Roles(Role.Patient)
  @Post('book')
  bookAppointment(@Body() dto: BookAppointmentDto) {
    return this.appointmentService.bookAppointment(dto);
  }

  // PATCH /appointments/:id/reschedule
  @Roles(Role.Patient)
  @Patch(':id/reschedule')
  rescheduleAppointment(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: RescheduleAppointmentDto
  ) {
    return this.appointmentService.rescheduleAppointment(id, dto);
  }

  // PATCH /appointments/:id/cancel
  @Roles(Role.Patient)
  @Patch(':id/cancel')
  cancelAppointment(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: CancelAppointmentDto
  ) {
    return this.appointmentService.cancelAppointment(id, dto);
  }

  // GET /appointments/client/:clientId
  @Roles(Role.Patient)
  @Get('client/:clientId')
  getClientAppointments(
    @Param('clientId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) clientId: number
  ) {
    return this.appointmentService.getClientAppointments(clientId);
  }

  // GET /appointments/doctor/:doctorId
  @Roles(Role.Doctor)
  @Get('doctor/:doctorId')
  getDoctorAppointments(
    @Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number
  ) {
    return this.appointmentService.getDoctorAppointments(doctorId);
  }

  // GET /appointments/:id/details
  @Get(':id/details')
  getAppointmentDetails(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.appointmentService.getAppointmentDetails(id);
  }

  // GET /appointments/:id/history
  @Get(':id/history')
  getAppointmentHistory(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.appointmentService.getAppointmentHistory(id);
  }

  // ─── ADMIN ONLY ENDPOINTS ────────────────────────────────────────────────────

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Roles(Role.Admin)
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.appointmentService.findOne(id);
  }

  @Roles(Role.Admin)
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() data: UpdateAppointmentDto
  ) {
    return this.appointmentService.update(id, data);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.appointmentService.remove(id);
  }
}
