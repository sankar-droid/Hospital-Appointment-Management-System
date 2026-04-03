import { Module } from '@nestjs/common';
import { AppointmentHistoryController } from './appointment-history.controller';
import { AppointmentHistoryService } from './appointment-history.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppointmentHistoryController],
  providers: [AppointmentHistoryService],
  exports: [AppointmentHistoryService]
})
export class AppointmentHistoryModule {}
