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
exports.OfficedoctoravailabilityController = void 0;
const common_1 = require("@nestjs/common");
const creareofficedoctoravailabilityDTO_1 = require("./DTOS/creareofficedoctoravailabilityDTO");
const updateofficedoctoravailabilityDTO_1 = require("./DTOS/updateofficedoctoravailabilityDTO");
const officedoctoravailability_service_1 = require("./officedoctoravailability.service");
const CustomExceptionFilter_1 = require("../CustomExceptionFilter");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../auth/role.guard");
const role_enum_1 = require("../auth/role.enum");
const roles_decorator_1 = require("../auth/roles.decorator");
let OfficedoctoravailabilityController = class OfficedoctoravailabilityController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll(officeId) {
        return this.service.findAll(officeId);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.OfficedoctoravailabilityController = OfficedoctoravailabilityController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(new CustomExceptionFilter_1.CustomExceptionFilter()),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Doctor),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creareofficedoctoravailabilityDTO_1.createofficedoctoravailabilityDTO]),
    __metadata("design:returntype", void 0)
], OfficedoctoravailabilityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseFilters)(new CustomExceptionFilter_1.CustomExceptionFilter()),
    __param(0, (0, common_1.Query)('officeId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OfficedoctoravailabilityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseFilters)(new CustomExceptionFilter_1.CustomExceptionFilter()),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OfficedoctoravailabilityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseFilters)(new CustomExceptionFilter_1.CustomExceptionFilter()),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Doctor),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE
    }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateofficedoctoravailabilityDTO_1.UpdateOfficeDoctorAvailabilityDTO]),
    __metadata("design:returntype", void 0)
], OfficedoctoravailabilityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Doctor),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.UseFilters)(new CustomExceptionFilter_1.CustomExceptionFilter()),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OfficedoctoravailabilityController.prototype, "remove", null);
exports.OfficedoctoravailabilityController = OfficedoctoravailabilityController = __decorate([
    (0, common_1.Controller)('officedoctoravailability'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [officedoctoravailability_service_1.OfficedoctoravailabilityService])
], OfficedoctoravailabilityController);
//# sourceMappingURL=officedoctoravailability.controller.js.map