import { Module } from '@nestjs/common';
import { DoctorUnavailabilityController } from './doctor-unavailability.controller';
import { DoctorUnavailabilityService } from './doctor-unavailability.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorUnavailabilityController],
  providers: [DoctorUnavailabilityService, AuthGuard, RoleGuard, Reflector]
})
export class DoctorUnavailabilityModule {}
