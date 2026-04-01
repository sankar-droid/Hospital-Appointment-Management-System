import { Module } from '@nestjs/common';
import { DoctorSpecializationController } from './doctor-specialization.controller';
import { DoctorSpecializationService } from './doctor-specialization.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorSpecializationController],
  providers: [DoctorSpecializationService, AuthGuard, RoleGuard, Reflector]
})
export class DoctorSpecializationModule {}
