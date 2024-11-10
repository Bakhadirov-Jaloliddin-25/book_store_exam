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
exports.DistrictController = void 0;
const common_1 = require("@nestjs/common");
const district_service_1 = require("./district.service");
const create_district_dto_1 = require("./dto/create-district.dto");
const update_district_dto_1 = require("./dto/update-district.dto");
const swagger_1 = require("@nestjs/swagger");
const district_entity_1 = require("./entities/district.entity");
const admin_guard_1 = require("../guards/admin.guard");
let DistrictController = class DistrictController {
    constructor(districtService) {
        this.districtService = districtService;
    }
    create(createDistrictDto) {
        return this.districtService.create(createDistrictDto);
    }
    findAll() {
        return this.districtService.findAll();
    }
    findOne(id) {
        return this.districtService.findOne(+id);
    }
    update(id, updateDistrictDto) {
        return this.districtService.update(+id, updateDistrictDto);
    }
    remove(id) {
        return this.districtService.remove(+id);
    }
};
exports.DistrictController = DistrictController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "District yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created District", type: district_entity_1.District }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_district_dto_1.CreateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Districtlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Districts",
        type: [district_entity_1.District],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Districtlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get District by ID",
        type: district_entity_1.District,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Districtlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update District by ID",
        type: district_entity_1.District,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_district_dto_1.UpdateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Districtlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete District by ID",
        type: district_entity_1.District,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "remove", null);
exports.DistrictController = DistrictController = __decorate([
    (0, common_1.Controller)("district"),
    __metadata("design:paramtypes", [district_service_1.DistrictService])
], DistrictController);
//# sourceMappingURL=district.controller.js.map