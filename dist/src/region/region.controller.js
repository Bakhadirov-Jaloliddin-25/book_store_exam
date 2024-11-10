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
exports.RegionController = void 0;
const common_1 = require("@nestjs/common");
const region_service_1 = require("./region.service");
const create_region_dto_1 = require("./dto/create-region.dto");
const update_region_dto_1 = require("./dto/update-region.dto");
const swagger_1 = require("@nestjs/swagger");
const region_entity_1 = require("./entities/region.entity");
const admin_guard_1 = require("../guards/admin.guard");
let RegionController = class RegionController {
    constructor(regionService) {
        this.regionService = regionService;
    }
    create(createRegionDto) {
        return this.regionService.create(createRegionDto);
    }
    findAll() {
        return this.regionService.findAll();
    }
    findOne(id) {
        return this.regionService.findOne(+id);
    }
    update(id, updateRegionDto) {
        return this.regionService.update(+id, updateRegionDto);
    }
    remove(id) {
        return this.regionService.remove(+id);
    }
};
exports.RegionController = RegionController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Region yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Region", type: region_entity_1.Region }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_region_dto_1.CreateRegionDto]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Regionlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of Regions", type: [region_entity_1.Region] }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Regionlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get Region by ID", type: region_entity_1.Region }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Regionlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update Region by ID",
        type: region_entity_1.Region,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_region_dto_1.UpdateRegionDto]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Regionlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete Region by ID",
        type: region_entity_1.Region,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "remove", null);
exports.RegionController = RegionController = __decorate([
    (0, common_1.Controller)("region"),
    __metadata("design:paramtypes", [region_service_1.RegionService])
], RegionController);
//# sourceMappingURL=region.controller.js.map