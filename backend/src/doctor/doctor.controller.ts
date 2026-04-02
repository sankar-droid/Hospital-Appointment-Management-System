import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './DTOS/createDoctorDTO';
import { UpdateDoctorDto } from './DTOS/updateDoctorDTO';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard, RoleGuard)
@Controller('doctors')
export class DoctorController {

  constructor(private readonly doctorService: DoctorService) {}

  // ─── PUBLIC ENDPOINTS ────────────────────────────────────────────────────────

  // GET /doctors — all verified doctors (public)
  @Get()
  getVerifiedDoctors() {
    return this.doctorService.getVerifiedDoctors();
  }

  // GET /doctors/:id — full doctor profile (public)
  @Get(':id')
  getDoctorProfile(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorService.getDoctorProfile(id);
  }

  // ─── DOCTOR ONLY ─────────────────────────────────────────────────────────────

  // POST /doctors — doctor creates own profile
  @Roles(Role.Doctor)
  @Post()
  create(@Body() dto: CreateDoctorDto, @Request() req) {
    return this.doctorService.create(dto, req.user.sub);
  }

  // PATCH /doctors/:id — doctor updates own profile
  @Roles(Role.Doctor)
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateDoctorDto
  ) {
    return this.doctorService.update(id, dto);
  }

  // ─── ADMIN ONLY ──────────────────────────────────────────────────────────────

  // GET /doctors/all — all doctors
  @Roles(Role.Admin)
  @Get('all')
  findAll() {
    return this.doctorService.findAll();
  }

  // PATCH /doctors/:id/verify — verify doctor
  @Roles(Role.Admin)
  @Patch(':id/verify')
  verifyDoctor(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorService.verifyDoctor(id);
  }

  // DELETE /doctors/:id
  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorService.remove(id);
  }
}
