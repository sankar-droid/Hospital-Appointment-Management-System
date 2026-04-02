import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { HospitalAffiliationService } from './hospital-affiliation.service';
import { CreateHospitalAffiliationDto } from './DTOS/createHospitalAffiliationDTO';
import { UpdateHospitalAffiliationDto } from './DTOS/updateHospitalAffiliationDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('hospital-affiliation')
@UseGuards(AuthGuard, RoleGuard)
export class HospitalAffiliationController {

  constructor(private readonly hospitalAffiliationService: HospitalAffiliationService) {}

  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.hospitalAffiliationService.findAll();
  }

  @Get('search')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async search(
    @Query('city') city?: string,
    @Query('country') country?: string
  ) {
    return await this.hospitalAffiliationService.search(city, country);
  }

  @Get('doctor/:doctorId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByDoctor(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.hospitalAffiliationService.findByDoctor(doctorId);
  }

  @Get('doctor/:doctorId/active')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findActiveByDoctor(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.hospitalAffiliationService.findActiveByDoctor(doctorId);
  }

  @Get('office/:officeId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByOffice(@Param('officeId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) officeId: number) {
    return await this.hospitalAffiliationService.findByOffice(officeId);
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.hospitalAffiliationService.findOne(id);
  }

  @Post()
  @Roles(Role.Admin, Role.Doctor)
  async create(@Body() dto: CreateHospitalAffiliationDto) {
    return await this.hospitalAffiliationService.create(dto);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  async update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateHospitalAffiliationDto
  ) {
    return await this.hospitalAffiliationService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.hospitalAffiliationService.remove(id);
  }
}
