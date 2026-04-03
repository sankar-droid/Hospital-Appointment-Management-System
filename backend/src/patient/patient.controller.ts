import { Controller, Get, Post, Patch, Body, Param, Query, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreateClientAccountDto } from './DTOS/createClientAccountDto';
import { SearchDoctorsDto } from './DTOS/searchDoctorsDto';
import { BookAppointmentDto } from './DTOS/bookAppointmentDto';
import { CancelAppointmentDto } from './DTOS/cancelAppointmentDto';
import { RescheduleAppointmentDto } from './DTOS/rescheduleAppointmentDto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { RoleGuard } from 'src/auth/role.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/user.decorator';

@ApiBearerAuth()
@Roles(Role.Patient)
@UseGuards(AuthGuard, RoleGuard)
@Controller('patient')
export class PatientController {

  constructor(private readonly patientService: PatientService) {}

  // ─── CREATE CLIENT ACCOUNT ────────────────────────────────────────────────────

  @Post('account')
  createClientAccount(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Body() dto: CreateClientAccountDto
  ) {
    return this.patientService.createClientAccount(userId, dto);
  }

  @Get('account')
  getClientAccount(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number
  ) {
    return this.patientService.getClientAccount(userId);
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
  bookAppointment(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Body() dto: BookAppointmentDto
  ) {
    return this.patientService.bookAppointment(userId, dto);
  }

  // ─── CANCEL APPOINTMENT ────────────────────────────────────────────────────

  @Patch('appointments/:id/cancel')
  cancelAppointment(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: CancelAppointmentDto
  ) {
    return this.patientService.cancelAppointment(userId, id, dto);
  }

  // ─── RESCHEDULE APPOINTMENT ────────────────────────────────────────────────────

  @Patch('appointments/:id/reschedule')
  rescheduleAppointment(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: RescheduleAppointmentDto
  ) {
    return this.patientService.rescheduleAppointment(userId, id, dto);
  }

  // ─── VIEW OWN APPOINTMENTS ────────────────────────────────────────────────────

  @Get('appointments')
  getOwnAppointments(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number
  ) {
    return this.patientService.getOwnAppointments(userId);
  }

  // ─── VIEW APPOINTMENT HISTORY ────────────────────────────────────────────────────

  @Get('appointments/:id/history')
  getAppointmentHistory(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.patientService.getAppointmentHistory(userId, id);
  }
}
