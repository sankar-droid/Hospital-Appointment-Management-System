import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeSlotDto } from './createTimeSlotDTO';

export class UpdateTimeSlotDto extends PartialType(CreateTimeSlotDto) {}
