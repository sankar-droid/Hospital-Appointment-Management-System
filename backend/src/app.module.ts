import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { DoctorRoleModule } from './doctor-role/doctor-role.module';
import { OfficeHospitalModule } from './office-hospital/office-hospital.module';
import { PatientModule } from './patient/patient.module';

import { NotificationModule } from './notification-module/notification.module';
import { AppointmentStatusModule } from './appointment-status/appointment-status.module';
import { AppointmentHistoryModule } from './appointment-history/appointment-history.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    AdminModule,
    DoctorRoleModule,
    OfficeHospitalModule,
    PatientModule,
    NotificationModule,
    AppointmentStatusModule,
    AppointmentHistoryModule,

  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
