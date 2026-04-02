import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentDto } from './createAppointmentDTO';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}
