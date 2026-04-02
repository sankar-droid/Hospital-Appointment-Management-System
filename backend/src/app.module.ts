import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { DoctorRoleModule } from './doctor-role/doctor-role.module';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
import { APP_GUARD } from '@nestjs/core';

import { OfficeHospitalModule } from './office-hospital/office-hospital.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    AdminModule,
    DoctorRoleModule,
    OfficeHospitalModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    }
  ],
})
export class AppModule {}
