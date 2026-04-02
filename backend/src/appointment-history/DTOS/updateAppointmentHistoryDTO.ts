import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentHistoryDto } from './createAppointmentHistoryDTO';

export class UpdateAppointmentHistoryDto extends PartialType(CreateAppointmentHistoryDto) {}
