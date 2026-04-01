import { Module } from '@nestjs/common';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [OfficeController],
  providers: [OfficeService, AuthGuard, RoleGuard, Reflector]
})
export class OfficeModule {}
