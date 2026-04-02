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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const createAppointmentDTO_1 = require("./DTOS/createAppointmentDTO");
const updateAppointmentDTO_1 = require("./DTOS/updateAppointmentDTO");
const bookAppointmentDTO_1 = require("./DTOS/bookAppointmentDTO");
const cancelAppointmentDTO_1 = require("./DTOS/cancelAppointmentDTO");
const rescheduleAppointmentDTO_1 = require("./DTOS/rescheduleAppointmentDTO");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../auth/role.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const role_enum_1 = require("../auth/role.enum");
const swagger_1 = require("@nestjs/swagger");
let AppointmentController = class AppointmentController {
    appointmentService;
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    bookAppointment(dto) {
        return this.appointmentService.bookAppointment(dto);
    }
    rescheduleAppointment(id, dto) {
        return this.appointmentService.rescheduleAppointment(id, dto);
    }
    cancelAppointment(id, dto) {
        return this.appointmentService.cancelAppointment(id, dto);
    }
    getClientAppointments(clientId) {
        return this.appointmentService.getClientAppointments(clientId);
    }
    getDoctorAppointments(doctorId) {
        return this.appointmentService.getDoctorAppointments(doctorId);
    }
    getAppointmentDetails(id) {
        return this.appointmentService.getAppointmentDetails(id);
    }
    getAppointmentHistory(id) {
        return this.appointmentService.getAppointmentHistory(id);
    }
    findAll() {
        return this.appointmentService.findAll();
    }
    findOne(id) {
        return this.appointmentService.findOne(id);
    }
    create(createAppointmentDto) {
        return this.appointmentService.create(createAppointmentDto);
    }
    update(id, data) {
        return this.appointmentService.update(id, data);
    }
    remove(id) {
        return this.appointmentService.remove(id);
    }
};
exports.AppointmentController = AppointmentController;
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Patient),
    (0, common_1.Post)('book'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookAppointmentDTO_1.BookAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "bookAppointment", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Patient),
    (0, common_1.Patch)(':id/reschedule'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rescheduleAppointmentDTO_1.RescheduleAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "rescheduleAppointment", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Patient),
    (0, common_1.Patch)(':id/cancel'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cancelAppointmentDTO_1.CancelAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "cancelAppointment", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Patient),
    (0, common_1.Get)('client/:clientId'),
    __param(0, (0, common_1.Param)('clientId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getClientAppointments", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Doctor),
    (0, common_1.Get)('doctor/:doctorId'),
    __param(0, (0, common_1.Param)('doctorId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getDoctorAppointments", null);
__decorate([
    (0, common_1.Get)(':id/details'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAppointmentDetails", null);
__decorate([
    (0, common_1.Get)(':id/history'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAppointmentHistory", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAppointmentDTO_1.CreateAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Doctor, role_enum_1.Role.Patient),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateAppointmentDTO_1.UpdateAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "remove", null);
exports.AppointmentController = AppointmentController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
//# sourceMappingURL=appointment.controller.js.map