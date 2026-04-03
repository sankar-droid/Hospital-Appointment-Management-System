import { Module } from '@nestjs/common';
import { DoctorRoleController } from './doctor-role.controller';
import { DoctorRoleService } from './doctor-role.service';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationModule } from '../notification-module/notification.module';

@Module({
  imports: [PrismaModule, NotificationModule],
  controllers: [DoctorRoleController],
  providers: [DoctorRoleService]
})
export class DoctorRoleModule {}
