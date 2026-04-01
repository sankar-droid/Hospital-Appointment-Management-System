import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { AppointmentHistoryModule } from './appointment-history/appointment-history.module';
import { ClientAccountModule } from './client-account/client-account.module';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorDocumentModule } from './doctor-document/doctor-document.module';
import { AppointmentStatusModule } from './appointment-status/appointment-status.module';
import { DoctorSpecializationModule } from './doctor-specialization/doctor-specialization.module';
import { DoctorUnavailabilityModule } from './doctor-unavailability/doctor-unavailability.module';
import { HospitalAffiliationModule } from './hospital-affiliation/hospital-affiliation.module';
import { InNetworkInsuranceModule } from './in-network-insurance/in-network-insurance.module';
import { NotificationModule } from './notification/notification.module';
import { OfficeModule } from './office/office.module';
import { OfficedoctoravailabilityModule } from './officedoctoravailability/officedoctoravailability.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { QualificationModule } from './qualification/qualification.module';
import { TimeslotModule } from './timeslot/timeslot.module';
import { SpecializationModule } from './specialization/specialization.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './auth/role.guard';

@Module({
  imports: [AppointmentModule, AppointmentHistoryModule, ClientAccountModule, DoctorModule, DoctorDocumentModule, AppointmentStatusModule, DoctorSpecializationModule, DoctorUnavailabilityModule, HospitalAffiliationModule, InNetworkInsuranceModule, NotificationModule, OfficeModule, OfficedoctoravailabilityModule, UsersModule, QualificationModule, TimeslotModule, SpecializationModule, AuthModule,JwtModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,{
      provide: APP_GUARD,
      useClass: AuthGuard,
    },{
      provide:APP_GUARD,
      useClass: RoleGuard,
    }],
})
export class AppModule {}
