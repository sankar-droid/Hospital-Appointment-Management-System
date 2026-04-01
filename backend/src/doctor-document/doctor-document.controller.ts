import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { DoctorDocumentService } from './doctor-document.service';
import { CreateDoctorDocumentDto } from './DTOS/createDoctorDocumentDTO';
import { UpdateDoctorDocumentDto } from './DTOS/updateDoctorDocumentDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { RoleGuard } from 'src/auth/role.guard';
@Controller('doctor-document')
@UseGuards(AuthGuard)
export class DoctorDocumentController {

  constructor(private readonly doctorDocumentService: DoctorDocumentService) {}

  @Get()
  async findAll() {
    return await this.doctorDocumentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorDocumentService.findOne(id);
  }

  @Post()
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  async create(@Body() dto: CreateDoctorDocumentDto) {
    return await this.doctorDocumentService.create(dto);
  }

  @Patch(':id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  async update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() dto: UpdateDoctorDocumentDto) {
    return await this.doctorDocumentService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.doctorDocumentService.remove(id);
  }
}
