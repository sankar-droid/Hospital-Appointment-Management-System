import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { InNetworkInsuranceService } from './in-network-insurance.service';
import { CreateInNetworkInsuranceDto } from './DTOS/createInNetworkInsuranceDTO';
import { UpdateInNetworkInsuranceDto } from './DTOS/updateInNetworkInsuranceDTO';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { User } from 'src/auth/user.decorator';

@ApiBearerAuth()
@UseGuards(AuthGuard, RoleGuard)
@Controller('in-network-insurance')
export class InNetworkInsuranceController {

  constructor(private readonly inNetworkInsuranceService: InNetworkInsuranceService) {}

  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.inNetworkInsuranceService.findAll();
  }

  @Get('search')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async search(@Query('name') name: string) {
    return await this.inNetworkInsuranceService.search(name);
  }

  @Get('office/:officeId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByOffice(@Param('officeId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) officeId: number) {
    return await this.inNetworkInsuranceService.findByOffice(officeId);
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.inNetworkInsuranceService.findOne(id);
  }

  @Post()
  @Roles(Role.Admin, Role.Doctor)
  async create(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Body() dto: CreateInNetworkInsuranceDto
  ) {
    return await this.inNetworkInsuranceService.create(userId, dto);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  async update(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateInNetworkInsuranceDto
  ) {
    return await this.inNetworkInsuranceService.update(userId, id, dto);
  }

  @Delete('office/:officeId/all')
  @Roles(Role.Admin, Role.Doctor)
  async removeAllByOffice(@Param('officeId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) officeId: number) {
    return await this.inNetworkInsuranceService.removeAllByOffice(officeId);
  }

  @Delete(':id')
  @Roles(Role.Admin, Role.Doctor)
  async remove(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return await this.inNetworkInsuranceService.remove(userId, id);
  }
}
