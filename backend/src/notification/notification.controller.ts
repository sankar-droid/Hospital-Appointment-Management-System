import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './DTOS/createNotificationDTO';
import { UpdateNotificationDto } from './DTOS/updateNotificationDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('notification')
@UseGuards(AuthGuard, RoleGuard)
export class NotificationController {

  constructor(private readonly notificationService: NotificationService) {}

  // Admin only — see all notifications
  @Get()
  @Roles(Role.Admin)
  async findAll() {
    return await this.notificationService.findAll();
  }

  // Admin, Doctor, Patient — get all notifications for a user
  @Get('user/:userId')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findByUser(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number) {
    return await this.notificationService.findByUser(userId);
  }

  // Admin, Doctor, Patient — get unread notifications (badge count)
  @Get('user/:userId/unread')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async findUnread(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number) {
    return await this.notificationService.findUnread(userId);
  }

  // Admin only — get single notification
  @Get(':id')
  @Roles(Role.Admin)
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.notificationService.findOne(id);
  }

  // Admin only — create notification
  @Post()
  @Roles(Role.Admin)
  async create(@Body() dto: CreateNotificationDto) {
    return await this.notificationService.create(dto);
  }

  // Admin, Doctor, Patient — mark all as read
  @Patch('user/:userId/mark-all-read')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async markAllRead(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number) {
    return await this.notificationService.markAllRead(userId);
  }

  // Admin, Doctor, Patient — mark single as read
  @Patch(':id/read')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async markAsRead(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.notificationService.markAsRead(id);
  }

  // Admin only — update notification
  @Patch(':id')
  @Roles(Role.Admin)
  async update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() dto: UpdateNotificationDto
  ) {
    return await this.notificationService.update(id, dto);
  }

  // Admin, Doctor, Patient — clear all read notifications
  @Delete('user/:userId/clear-read')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  async clearRead(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number) {
    return await this.notificationService.clearRead(userId);
  }

  // Admin only — delete single notification
  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return await this.notificationService.remove(id);
  }
}
