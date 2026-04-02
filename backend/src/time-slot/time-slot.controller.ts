import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './DTOS/createTimeSlotDTO';
import { UpdateTimeSlotDto } from './DTOS/updateTimeSlotDTO';

@Controller('time-slot')
export class TimeSlotController {

  constructor(private readonly timeSlotService: TimeSlotService) {}

  @Get()
  findAll() {
    return this.timeSlotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.timeSlotService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTimeSlotDto) {
    return this.timeSlotService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() dto: UpdateTimeSlotDto) {
    return this.timeSlotService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.timeSlotService.remove(id);
  }
}
