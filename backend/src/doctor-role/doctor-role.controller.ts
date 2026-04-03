import { Controller, Get, Post, Patch, Delete, Body, UseGuards, UseInterceptors, UploadedFiles, UploadedFile, Param, ParseIntPipe, HttpStatus, Res, UseFilters } from '@nestjs/common';
import { DoctorRoleService } from './doctor-role.service';
import { UpdateDoctorSetupProfileDTO } from './DTOS/UpdateDoctorSetupProfileDTO';
import { SetupProfileDto } from './DTOS/setupProfileDto';
import { CreatePrivatePracticeDto } from './DTOS/createPrivatePracticeDto';
import { UpdatePrivatePracticeDto } from './DTOS/updatePrivatePracticeDto';
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
import {User} from 'src/auth/user.decorator';
import { CustomExceptionFilter } from 'src/CustomExceptionFilter';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('doctor-role')
export class DoctorRoleController {

  constructor(private readonly doctorRoleService: DoctorRoleService) {}
  @Post('setup-profile')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
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
  setupProfile
  (@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number,
    @Body() dto: SetupProfileDto,
    @UploadedFiles() files: Express.Multer.File[]
  ) {
    return this.doctorRoleService.setupProfile(id, dto, files || []);
  }

  // ─── GET PROFILE ─────────────────────────────────────────────────────────────

  @Get('profile')
   @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  getProfile(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number) {
    return this.doctorRoleService.getProfile(id);
  }

  // ─── UPDATE BASIC INFO (AFTER VERIFICATION) ──────────────────────────────────

  @Patch('profile')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  updateProfile(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))id:number, @Body() dto: UpdateDoctorSetupProfileDTO) {
    return this.doctorRoleService.updateProfile(id, dto);
  }

  // ─── DOCUMENT DOWNLOAD ───────────────────────────────────────────────────────

  @Get('documents/:id/download')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  async downloadDocument(
    @User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Res() res: Response
  ) {
    const document = await this.doctorRoleService.downloadDocument(userid, id);
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="document-${id}"`
    });
    res.send(Buffer.from(document.fileUrl));
  }

  // ─── REQUEST VERIFICATION ────────────────────────────────────────────────────

  @Patch('request-verification')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  requestVerification( @User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number) {
    return this.doctorRoleService.requestVerification(userid);
  }

  // ─── REQUEST SPECIALIZATION ──────────────────────────────────────────────────

  @Post('request-specialization/:specializationId')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
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
    @User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number,
    @Param('specializationId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) specializationId: number,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.doctorRoleService.requestSpecialization(userid, specializationId, file);
  }

  // ─── AVAILABILITY ────────────────────────────────────────────────────

  @Post('availability')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  setAvailability(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Body() dto: SetAvailabilityDto
  ) {
    return this.doctorRoleService.setAvailability(userid, dto);
  }

  @Get('availability/:doctorHospitalId')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  getAvailability(
   @User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number,
    @Param('doctorHospitalId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorHospitalId: number
  ) {
    return this.doctorRoleService.getAvailability(userid, doctorHospitalId);
  }

  // ─── TIMESLOT GENERATION ────────────────────────────────────────────────────

  @Post('timeslots/generate')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  generateTimeSlots(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number, @Body() dto: GenerateTimeSlotsDto) {
    return this.doctorRoleService.generateTimeSlots(userid, dto);
  }

  // ─── UNAVAILABILITY ────────────────────────────────────────────────────

  @Post('unavailability')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  markUnavailability(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number, @Body() dto: MarkUnavailabilityDto) {
    return this.doctorRoleService.markUnavailability(userid, dto);
  }

  // ─── APPOINTMENTS ────────────────────────────────────────────────────

  @Get('appointments')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  getOwnAppointments(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number) {
    return this.doctorRoleService.getOwnAppointments(userid);
  }

  @Patch('appointments/:id/complete')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  completeAppointment(
    @User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorRoleService.completeAppointment(userid, id);
  }

  // ─── HOSPITAL AFFILIATION ────────────────────────────────────────────────────

  @Post('affiliate')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  affiliateWithHospital(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number, @Body() dto: AffiliateHospitalDto) {
    return this.doctorRoleService.affiliateWithHospital(userid, dto);
  }

  // ─── OFFICE MANAGEMENT ──────────────────────────────────────────────────────

  @Post('office')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  createOffice(@User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number, @Body() dto: CreatePrivatePracticeDto) {
    return this.doctorRoleService.createOffice(userid, dto);
  }

  @Patch('practices/:id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  updatePractice(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: Partial<CreatePrivatePracticeDto>
  ) {
    return this.doctorRoleService.updatePractice(userid, id, dto);
  }

  @Delete('practices/:id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  deletePractice(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorRoleService.deletePractice(userid, id);
  }

  @Patch('office/:id')
  @Roles(Role.Doctor)
  updatePrivatePractice(
   @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdatePrivatePracticeDto
  ) {
    return this.doctorRoleService.updatePractice(userid, id, dto);
  }

  @Get('offices')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  getOffices(@User('sub',new ParseIntPipe({ errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
	}))userid:number) {
    return this.doctorRoleService.getOffices(userid);
  }

  // ─── AVAILABILITY MANAGEMENT ─────────────────────────────────────────────────

  @Delete('availability/:id')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  deleteAvailability(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
  ) {
    return this.doctorRoleService.deleteAvailability(userid, id);
  }

  // ─── TIMESLOTS ───────────────────────────────────────────────────────────────

  @Get('timeslots/:doctorHospitalId')
  @Roles(Role.Doctor)
  @UseGuards(RoleGuard)
  @UseFilters(new CustomExceptionFilter())
  getTimeSlots(
    @User('sub', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userid: number,
    @Param('doctorHospitalId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) doctorHospitalId: number
  ) {
    return this.doctorRoleService.getTimeSlots(userid, doctorHospitalId);
  }
}
