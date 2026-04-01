import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [NotificationController],
  providers: [NotificationService, AuthGuard, RoleGuard, Reflector]
})
export class NotificationModule {}
