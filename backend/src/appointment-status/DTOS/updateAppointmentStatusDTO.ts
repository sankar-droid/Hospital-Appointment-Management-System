import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentStatusDto } from './createAppointmentStatusDTO';

export class UpdateAppointmentStatusDto extends PartialType(CreateAppointmentStatusDto) {}
