import { Module } from '@nestjs/common';
import { DoctorRoleController } from './doctor-role.controller';
import { DoctorRoleService } from './doctor-role.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorRoleController],
  providers: [DoctorRoleService]
})
export class DoctorRoleModule {}
