import { Controller, Get, Post, Patch, Body, Param, Query, Request, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreateClientAccountDto } from './DTOS/createClientAccountDto';
import { SearchDoctorsDto } from './DTOS/searchDoctorsDto';
import { BookAppointmentDto } from './DTOS/bookAppointmentDto';
import { CancelAppointmentDto } from './DTOS/cancelAppointmentDto';
import { RescheduleAppointmentDto } from './DTOS/rescheduleAppointmentDto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';

@ApiBearerAuth()
@Roles(Role.Patient)
@Controller('patient')
export class PatientController {

  constructor(private readonly patientService: PatientService) {}

  // ─── CREATE CLIENT ACCOUNT ────────────────────────────────────────────────────

  @Post('account')
  createClientAccount(@Request() req, @Body() dto: CreateClientAccountDto) {
    return this.patientService.createClientAccount(req.user.sub, dto);
  }

  // ─── SEARCH DOCTORS ───────────────────────────────────────────────────────────

  @Get('doctors')
  searchDoctors(@Query() dto: SearchDoctorsDto) {
    return this.patientService.searchDoctors(dto);
  }

  // ─── VIEW DOCTOR PROFILE ──────────────────────────────────────────────────────

  @Get('doctors/:id')
  getDoctorProfile(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.patientService.getDoctorProfile(id);
  }

  // ─── VIEW AVAILABLE TIMESLOTS ─────────────────────────────────────────────────

  @Get('doctors/:id/timeslots')
  getAvailableTimeSlots(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Query('doctorHospitalId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorHospitalId: number
  ) {
    return this.patientService.getAvailableTimeSlots(id, doctorHospitalId);
  }

  // ─── BOOK APPOINTMENT ────────────────────────────────────────────────────

  @Post('appointments/book')
  bookAppointment(@Request() req, @Body() dto: BookAppointmentDto) {
    return this.patientService.bookAppointment(req.user.sub, dto);
  }

  // ─── CANCEL APPOINTMENT ────────────────────────────────────────────────────

  @Patch('appointments/:id/cancel')
  cancelAppointment(
    @Request() req,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: CancelAppointmentDto
  ) {
    return this.patientService.cancelAppointment(req.user.sub, id, dto);
  }

  // ─── RESCHEDULE APPOINTMENT ────────────────────────────────────────────────────

  @Patch('appointments/:id/reschedule')
  rescheduleAppointment(
    @Request() req,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: RescheduleAppointmentDto
  ) {
    return this.patientService.rescheduleAppointment(req.user.sub, id, dto);
  }

  // ─── VIEW OWN APPOINTMENTS ────────────────────────────────────────────────────

  @Get('appointments')
  getOwnAppointments(@Request() req) {
    return this.patientService.getOwnAppointments(req.user.sub);
  }

  // ─── VIEW APPOINTMENT HISTORY ────────────────────────────────────────────────────

  @Get('appointments/:id/history')
  getAppointmentHistory(
    @Request() req,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.patientService.getAppointmentHistory(req.user.sub, id);
  }
}
