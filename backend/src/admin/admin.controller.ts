import { Controller, Get, Post, Patch, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('admin')
export class AdminController {

  constructor(private readonly adminService: AdminService) {}

  // ─── USER MANAGEMENT ─────────────────────────────────────────────────────────

  @Get('users')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }

  @Patch('users/:id/deactivate')
  deactivateUser(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.deactivateUser(id);
  }

  @Patch('users/:id/activate')
  activateUser(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.activateUser(id);
  }

  // ─── DOCTOR MANAGEMENT ───────────────────────────────────────────────────────

  @Get('doctors')
  getAllDoctors() {
    return this.adminService.getAllDoctors();
  }

  @Get('doctors/pending')
  getPendingDoctors() {
    return this.adminService.getPendingDoctors();
  }

  @Get('doctors/:id')
  getDoctorById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.getDoctorById(id);
  }

  @Patch('doctors/:id/verify')
  verifyDoctor(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.verifyDoctor(id);
  }

  // ─── APPOINTMENT MANAGEMENT ──────────────────────────────────────────────────

  @Get('appointments')
  getAllAppointments() {
    return this.adminService.getAllAppointments();
  }

  @Get('appointments/:id')
  getAppointmentById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.getAppointmentById(id);
  }

  // ─── PATIENT MANAGEMENT ──────────────────────────────────────────────────────

  @Get('patients')
  getAllPatients() {
    return this.adminService.getAllPatients();
  }

  @Get('patients/:id')
  getPatientById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.adminService.getPatientById(id);
  }

  // ─── SPECIALIZATION REQUESTS ─────────────────────────────────────────────────

  @Get('specialization-requests')
  getSpecializationRequests() {
    return this.adminService.getSpecializationRequests();
  }

  @Post('specialization-requests/:doctorId/:specializationId/approve')
  approveSpecialization(
    @Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number,
    @Param('specializationId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) specializationId: number
  ) {
    return this.adminService.approveSpecialization(doctorId, specializationId);
  }
}
