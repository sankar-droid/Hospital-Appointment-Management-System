import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { OfficeService } from './office.service';
import { CreateOfficeDto } from './DTOS/createOfficeDTO';
import { UpdateOfficeDto } from './DTOS/updateOfficeDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('office')
@UseGuards(AuthGuard, RoleGuard)
export class OfficeController {

  constructor(private readonly officeService: OfficeService) {}

  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.officeService.findAll();
  }

  @Get('search')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async search(
    @Query('city') city?: string,
    @Query('state') state?: string,
    @Query('country') country?: string,
    @Query('maxFee') maxFee?: string
  ) {
    return await this.officeService.search(city, state, country, maxFee ? parseFloat(maxFee) : undefined);
  }

  @Get('doctor/:doctorId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByDoctor(@Param('doctorId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorId: number) {
    return await this.officeService.findByDoctor(doctorId);
  }

  @Get(':id/availability')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async getAvailability(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.officeService.getAvailability(id);
  }

  @Get(':id/timeslots/available')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async getAvailableTimeSlots(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Query('date') date: string
  ) {
    return await this.officeService.getAvailableTimeSlots(id, date);
  }

  @Get(':id/insurances')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async getInsurances(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.officeService.getInsurances(id);
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.officeService.findOne(id);
  }

  @Post()
  @Roles(Role.Admin, Role.Doctor)
  async create(@Body() dto: CreateOfficeDto) {
    return await this.officeService.create(dto);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  async update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateOfficeDto
  ) {
    return await this.officeService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.officeService.remove(id);
  }
}
