import { PartialType } from '@nestjs/swagger';
import { CreatePrivatePracticeDto } from './createPrivatePracticeDto';

export class UpdatePrivatePracticeDto extends PartialType(CreatePrivatePracticeDto) {}
