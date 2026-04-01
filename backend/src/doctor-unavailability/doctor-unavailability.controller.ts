import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { DoctorUnavailabilityService } from './doctor-unavailability.service';
import { CreateDoctorUnavailabilityDto } from './DTOS/createDoctorUnavailabilityDTO';
import { UpdateDoctorUnavailabilityDto } from './DTOS/updateDoctorUnavailabilityDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('doctor-unavailability')
@UseGuards(AuthGuard, RoleGuard)
export class DoctorUnavailabilityController {

  constructor(private readonly doctorUnavailabilityService: DoctorUnavailabilityService) {}

  // Admin only — see all records
  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.doctorUnavailabilityService.findAll();
  }

  // Admin, Doctor, Patient — get all unavailable dates for a doctor
  @Get('doctor/:doctorId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByDoctor(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.doctorUnavailabilityService.findByDoctor(doctorId);
  }

  // Admin, Doctor, Patient — get upcoming unavailable dates
  @Get('doctor/:doctorId/upcoming')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findUpcoming(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.doctorUnavailabilityService.findUpcoming(doctorId);
  }

  // Admin, Doctor, Patient — check if doctor is unavailable on a date (used before booking)
  @Get('doctor/:doctorId/check')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async checkUnavailability(
    @Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number,
    @Query('date') date: string
  ) {
    return await this.doctorUnavailabilityService.checkUnavailability(doctorId, date);
  }

  // Admin, Doctor — view single record
  @Get(':id')
  @Roles(Role.Admin, Role.Doctor)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorUnavailabilityService.findOne(id);
  }

  // Admin, Doctor — mark unavailable date
  @Post()
  @Roles(Role.Admin, Role.Doctor)
  async create(@Body() dto: CreateDoctorUnavailabilityDto) {
    return await this.doctorUnavailabilityService.create(dto);
  }

  // Admin, Doctor — update unavailable date
  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  async update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateDoctorUnavailabilityDto
  ) {
    return await this.doctorUnavailabilityService.update(id, dto);
  }

  // Admin, Doctor — clear all past unavailability records
  @Delete('doctor/:doctorId/clear-past')
  @Roles(Role.Admin, Role.Doctor)
  async clearPast(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.doctorUnavailabilityService.clearPast(doctorId);
  }

  // Admin, Doctor — delete single record
  @Delete(':id')
  @Roles(Role.Admin, Role.Doctor)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorUnavailabilityService.remove(id);
  }
}
