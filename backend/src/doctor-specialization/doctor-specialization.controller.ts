import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { DoctorSpecializationService } from './doctor-specialization.service';
import { CreateDoctorSpecializationDto } from './DTOS/createDoctorSpecializationDTO';
import { UpdateDoctorSpecializationDto } from './DTOS/updateDoctorSpecializationDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('doctor-specialization')
@UseGuards(AuthGuard, RoleGuard)
export class DoctorSpecializationController {

  constructor(private readonly doctorSpecializationService: DoctorSpecializationService) {}

  // Admin only — see all records
  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.doctorSpecializationService.findAll();
  }

  // Admin, Doctor, Patient — view specializations of a doctor
  @Get('doctor/:doctorId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByDoctor(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.doctorSpecializationService.findByDoctor(doctorId);
  }

  // Admin, Patient — find doctors by specialization (search feature)
  @Get('specialization/:specializationId/doctors')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findDoctorsBySpecialization(@Param('specializationId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) specializationId: number) {
    return await this.doctorSpecializationService.findDoctorsBySpecialization(specializationId);
  }

  // Admin, Doctor — view single record
  @Get(':id')
  @Roles(Role.Admin, Role.Doctor)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorSpecializationService.findOne(id);
  }

  // Admin, Doctor — assign specialization
  @Post()
  @Roles(Role.Admin, Role.Doctor)
  async create(@Body() dto: CreateDoctorSpecializationDto) {
    return await this.doctorSpecializationService.create(dto);
  }

  // Admin, Doctor — update specialization
  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() dto: UpdateDoctorSpecializationDto) {
    return await this.doctorSpecializationService.update(id, dto);
  }

  // Admin, Doctor — remove specific specialization from doctor
  @Delete('doctor/:doctorId/specialization/:specializationId')
  @Roles(Role.Admin, Role.Doctor)
  async removeByDoctorAndSpecialization(
    @Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number,
    @Param('specializationId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) specializationId: number
  ) {
    return await this.doctorSpecializationService.removeByDoctorAndSpecialization(doctorId, specializationId);
  }

  // Admin only — delete by id
  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorSpecializationService.remove(id);
  }
}
