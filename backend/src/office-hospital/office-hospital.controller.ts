
import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { OfficeHospitalService } from './office-hospital.service';
import { CreateOfficeDTO } from './DTOS/createOfficeDTO';
import { CreateHospitalDto } from './DTOS/createHospitalDto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@ApiBearerAuth()
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller('admin')
export class OfficeHospitalController {

  constructor(private readonly officeHospitalService: OfficeHospitalService) {}

  // ─── OFFICE ───────────────────────────────────────────────────────────────────

  @Post('offices')
  createOffice(@Body() dto: CreateOfficeDTO) {
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

  @Patch('offices/:id')
  updateOffice(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,

    @Body() dto: Partial<CreateOfficeDTO>

  ) {
    return this.officeHospitalService.updateOffice(id, dto);
  }


  @Delete('offices/:id')
  deleteOffice(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.officeHospitalService.deleteOffice(id);
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

  @Patch('hospitals/:id')
  updateHospital(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: Partial<CreateHospitalDto>
  ) {
    return this.officeHospitalService.updateHospital(id, dto);
  }

  @Delete('hospitals/:id')
  deleteHospital(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.officeHospitalService.deleteHospital(id);
  }
}
