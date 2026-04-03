import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationModule } from '../notification-module/notification.module';

@Module({
  imports: [PrismaModule, NotificationModule],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
