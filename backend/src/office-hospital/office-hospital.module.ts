import { Module } from '@nestjs/common';
import { OfficeHospitalController } from './office-hospital.controller';
import { OfficeHospitalService } from './office-hospital.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OfficeHospitalController],
  providers: [OfficeHospitalService]
})
export class OfficeHospitalModule {}
