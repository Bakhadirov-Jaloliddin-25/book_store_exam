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
exports.StoreAddressController = void 0;
const common_1 = require("@nestjs/common");
const store_address_service_1 = require("./store_address.service");
const create_store_address_dto_1 = require("./dto/create-store_address.dto");
const update_store_address_dto_1 = require("./dto/update-store_address.dto");
const swagger_1 = require("@nestjs/swagger");
const store_address_entity_1 = require("./entities/store_address.entity");
const admin_guard_1 = require("../guards/admin.guard");
let StoreAddressController = class StoreAddressController {
    constructor(storeAddressService) {
        this.storeAddressService = storeAddressService;
    }
    create(createStoreAddressDto) {
        return this.storeAddressService.create(createStoreAddressDto);
    }
    findAll() {
        return this.storeAddressService.findAll();
    }
    findOne(id) {
        return this.storeAddressService.findOne(+id);
    }
    update(id, updateStoreAddressDto) {
        return this.storeAddressService.update(+id, updateStoreAddressDto);
    }
    remove(id) {
        return this.storeAddressService.remove(+id);
    }
};
exports.StoreAddressController = StoreAddressController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "StoreAddress yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created StoreAddress",
        type: store_address_entity_1.StoreAddress,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_address_dto_1.CreateStoreAddressDto]),
    __metadata("design:returntype", void 0)
], StoreAddressController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha StoreAddresslarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of StoreAddresss",
        type: [store_address_entity_1.StoreAddress],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreAddressController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha StoreAddresslarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get StoreAddress by ID",
        type: store_address_entity_1.StoreAddress,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreAddressController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha StoreAddresslarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update StoreAddress by ID",
        type: store_address_entity_1.StoreAddress,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_address_dto_1.UpdateStoreAddressDto]),
    __metadata("design:returntype", void 0)
], StoreAddressController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha StoreAddresslarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete StoreAddress by ID",
        type: store_address_entity_1.StoreAddress,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreAddressController.prototype, "remove", null);
exports.StoreAddressController = StoreAddressController = __decorate([
    (0, common_1.Controller)("store-address"),
    __metadata("design:paramtypes", [store_address_service_1.StoreAddressService])
], StoreAddressController);
//# sourceMappingURL=store_address.controller.js.map