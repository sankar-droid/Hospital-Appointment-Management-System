import { Controller, Get, Post, Patch, Body, Request, UseGuards, UseInterceptors, UploadedFiles, UploadedFile, Param, ParseIntPipe, HttpStatus, Res } from '@nestjs/common';
import { DoctorRoleService } from './doctor-role.service';
import { UpdateDoctorDto } from '../doctor/DTOS/updateDoctorDTO';
import { SetupProfileDto } from './DTOS/setupProfileDto';
import { CreatePrivatePracticeDto } from './DTOS/createPrivatePracticeDto';
import { AffiliateHospitalDto } from './DTOS/affiliateHospitalDto';
import { SetAvailabilityDto } from './DTOS/setAvailabilityDto';
import { GenerateTimeSlotsDto } from './DTOS/generateTimeSlotsDto';
import { MarkUnavailabilityDto } from './DTOS/markUnavailabilityDto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { RoleGuard } from 'src/auth/role.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';


@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('doctor-role')
export class DoctorRoleController {

  constructor(private readonly doctorRoleService: DoctorRoleService) {}

  // ─── SETUP PROFILE (ALL IN ONE) ──────────────────────────────────────────────

  @Post('setup-profile')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: { type: 'string', example: 'Mounika' },
        lastName: { type: 'string', example: 'B' },
        professionalStatement: { type: 'string', example: 'Experienced cardiologist' },
        practicingFrom: { type: 'string', example: '2020-01-01T00:00:00.000Z' },
        specializations: { type: 'string', example: '[1, 2]', description: 'JSON array of specialization ids' },
        qualifications: { type: 'string', example: '[{"qualificationName":"MBBS","instituteName":"AIIMS"}]' },
        hospitalAffiliations: { type: 'string', example: '[{"hospitalName":"Apollo","city":"Hyderabad","country":"India"}]' },
        documentTypes: { type: 'string', example: '["License", "Degree"]' },
        files: { type: 'array', items: { type: 'string', format: 'binary' } }
      }
    }
  })
  @UseInterceptors(FilesInterceptor('files', 5, {
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
        return cb(new Error('Only jpg, jpeg, png, pdf files are allowed'), false);
      }
      cb(null, true);
    }
  }))
  setupProfile(
    @Request() req,
    @Body() dto: SetupProfileDto,
    @UploadedFiles() files: Express.Multer.File[]
  ) {
    return this.doctorRoleService.setupProfile(req.user.sub, dto, files || []);
  }

  // ─── GET PROFILE ─────────────────────────────────────────────────────────────

  @Get('profile')
   @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  getProfile(@Request() req) {
    return this.doctorRoleService.getProfile(req.user.sub);
  }

  // ─── UPDATE BASIC INFO (AFTER VERIFICATION) ──────────────────────────────────

  @Patch('profile')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  updateProfile(@Request() req, @Body() dto: UpdateDoctorDto) {
    return this.doctorRoleService.updateProfile(req.user.sub, dto);
  }

  // ─── DOCUMENT DOWNLOAD ───────────────────────────────────────────────────────

  @Get('documents/:id/download')
  async downloadDocument(
    @Request() req,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Res() res: Response
  ) {
    const document = await this.doctorRoleService.downloadDocument(req.user.sub, id);
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="document-${id}"`
    });
    res.send(Buffer.from(document.fileUrl));
  }

  // ─── REQUEST VERIFICATION ────────────────────────────────────────────────────

  @Patch('request-verification')
  requestVerification(@Request() req) {
    return this.doctorRoleService.requestVerification(req.user.sub);
  }

  // ─── REQUEST SPECIALIZATION ──────────────────────────────────────────────────

  @Post('request-specialization/:specializationId')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' }
      }
    }
  })
  @UseInterceptors(FileInterceptor('file', {
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
        return cb(new Error('Only jpg, jpeg, png, pdf files are allowed'), false);
      }
      cb(null, true);
    }
  }))
  requestSpecialization(
    @Request() req,
    @Param('specializationId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) specializationId: number,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.doctorRoleService.requestSpecialization(req.user.sub, specializationId, file);
  }

  // ─── AVAILABILITY ────────────────────────────────────────────────────

  @Post('availability')
  @Roles(Role.Doctor)
  setAvailability(@Request() req, @Body() dto: SetAvailabilityDto) {
    return this.doctorRoleService.setAvailability(req.user.sub, dto);
  }

  @Get('availability/:doctorHospitalId')
  @Roles(Role.Doctor)
  getAvailability(
    @Request() req,
    @Param('doctorHospitalId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorHospitalId: number
  ) {
    return this.doctorRoleService.getAvailability(req.user.sub, doctorHospitalId);
  }

  // ─── TIMESLOT GENERATION ────────────────────────────────────────────────────

  @Post('timeslots/generate')
  @Roles(Role.Doctor)
  generateTimeSlots(@Request() req, @Body() dto: GenerateTimeSlotsDto) {
    return this.doctorRoleService.generateTimeSlots(req.user.sub, dto);
  }

  // ─── UNAVAILABILITY ────────────────────────────────────────────────────

  @Post('unavailability')
  @Roles(Role.Doctor)
  markUnavailability(@Request() req, @Body() dto: MarkUnavailabilityDto) {
    return this.doctorRoleService.markUnavailability(req.user.sub, dto);
  }

  // ─── APPOINTMENTS ────────────────────────────────────────────────────

  @Get('appointments')
  @Roles(Role.Doctor)
  getOwnAppointments(@Request() req) {
    return this.doctorRoleService.getOwnAppointments(req.user.sub);
  }

  @Patch('appointments/:id/complete')
  @Roles(Role.Doctor)
  completeAppointment(
    @Request() req,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorRoleService.completeAppointment(req.user.sub, id);
  }

  // ─── HOSPITAL AFFILIATION ────────────────────────────────────────────────────

  @Post('affiliate')
  @Roles(Role.Doctor)
  affiliateWithHospital(@Request() req, @Body() dto: AffiliateHospitalDto) {
    return this.doctorRoleService.affiliateWithHospital(req.user.sub, dto);
  }

  // ─── OFFICE MANAGEMENT ──────────────────────────────────────────────────────

  @Post('office')
  createOffice(@Request() req, @Body() dto: CreatePrivatePracticeDto) {
    return this.doctorRoleService.createOffice(req.user.sub, dto);
  }

  @Get('offices')
  getOffices(@Request() req) {
    return this.doctorRoleService.getOffices(req.user.sub);
  }
}
