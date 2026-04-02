import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { OfficeHospitalService } from './office-hospital.service';
import { CreateOfficeDto } from '../office/DTOS/createOfficeDTO';
import { CreateHospitalDto } from './DTOS/createHospitalDto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('admin')
export class OfficeHospitalController {

  constructor(private readonly officeHospitalService: OfficeHospitalService) {}

  // ─── OFFICE ───────────────────────────────────────────────────────────────────

  @Post('offices')
  createOffice(@Body() dto: CreateOfficeDto) {
    return this.officeHospitalService.createOffice(dto);
  }

  @Get('offices')
  getAllOffices() {
    return this.officeHospitalService.getAllOffices();
  }

  @Get('offices/:id')
  getOfficeById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.officeHospitalService.getOfficeById(id);
  }

  // ─── HOSPITAL ─────────────────────────────────────────────────────────────────

  @Post('offices/:officeId/hospitals')
  createHospital(
    @Param('officeId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) officeId: number,
    @Body() dto: CreateHospitalDto
  ) {
    return this.officeHospitalService.createHospital(officeId, dto);
  }

  @Get('offices/:officeId/hospitals')
  getHospitalsByOffice(
    @Param('officeId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) officeId: number
  ) {
    return this.officeHospitalService.getHospitalsByOffice(officeId);
  }

  @Get('hospitals/:id')
  getHospitalById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.officeHospitalService.getHospitalById(id);
  }
}
