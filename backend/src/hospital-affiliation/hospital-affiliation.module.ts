import { Module } from '@nestjs/common';
import { HospitalAffiliationController } from './hospital-affiliation.controller';
import { HospitalAffiliationService } from './hospital-affiliation.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [HospitalAffiliationController],
  providers: [HospitalAffiliationService, AuthGuard, RoleGuard, Reflector]
})
export class HospitalAffiliationModule {}
