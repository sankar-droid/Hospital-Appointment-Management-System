"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficedoctoravailabilityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OfficedoctoravailabilityService = class OfficedoctoravailabilityService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        if (dto.start_time >= dto.end_time) {
            throw new common_1.BadRequestException('Start time must be less than end time');
        }
        const overlap = await this.prisma.officeDoctorAvailability.findFirst({
            where: {
                doctorHospitalId: dto.office_id,
                dayOfWeek: dto.day_of_week,
                startTime: { lt: dto.end_time },
                endTime: { gt: dto.start_time }
            }
        });
        if (overlap)
            throw new common_1.BadRequestException('Time overlaps with existing slot');
        return this.prisma.officeDoctorAvailability.create({
            data: {
                doctorHospital: { connect: { id: dto.office_id } },
                dayOfWeek: dto.day_of_week,
                startTime: dto.start_time,
                endTime: dto.end_time,
                isAvailable: dto.is_available ?? true,
                reason: dto.reason_of_unavailability ?? ' '
            }
        });
    }
    async findAll(doctorHospitalId) {
        return this.prisma.officeDoctorAvailability.findMany({
            where: { doctorHospitalId },
            orderBy: { dayOfWeek: 'asc' }
        });
    }
    async findOne(id) {
        const record = await this.prisma.officeDoctorAvailability.findUnique({ where: { id } });
        if (!record)
            throw new common_1.NotFoundException('Availability not found');
        return record;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.start_time && dto.end_time) {
            if (dto.start_time >= dto.end_time)
                throw new common_1.BadRequestException('Invalid time range');
        }
        return this.prisma.officeDoctorAvailability.update({
            where: { id },
            data: {
                ...(dto.office_id && { doctorHospital: { connect: { id: dto.office_id } } }),
                dayOfWeek: dto.day_of_week,
                startTime: dto.start_time,
                endTime: dto.end_time,
                isAvailable: dto.is_available ?? true,
                reason: dto.reason_of_unavailability ?? ' '
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.officeDoctorAvailability.delete({ where: { id } });
    }
};
exports.OfficedoctoravailabilityService = OfficedoctoravailabilityService;
exports.OfficedoctoravailabilityService = OfficedoctoravailabilityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OfficedoctoravailabilityService);
//# sourceMappingURL=officedoctoravailability.service.js.map