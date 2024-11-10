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
exports.DiscountsController = void 0;
const common_1 = require("@nestjs/common");
const discounts_service_1 = require("./discounts.service");
const create_discount_dto_1 = require("./dto/create-discount.dto");
const update_discount_dto_1 = require("./dto/update-discount.dto");
const discount_entity_1 = require("./entities/discount.entity");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let DiscountsController = class DiscountsController {
    constructor(discountsService) {
        this.discountsService = discountsService;
    }
    create(createDiscountDto) {
        return this.discountsService.create(createDiscountDto);
    }
    findAll() {
        return this.discountsService.findAll();
    }
    findOne(id) {
        return this.discountsService.findOne(+id);
    }
    update(id, updateDiscountDto) {
        return this.discountsService.update(+id, updateDiscountDto);
    }
    remove(id) {
        return this.discountsService.remove(+id);
    }
};
exports.DiscountsController = DiscountsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Discount yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Discount", type: discount_entity_1.Discount }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discount_dto_1.CreateDiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Discountlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Discounts",
        type: [discount_entity_1.Discount],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Discountlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get Discount by ID",
        type: discount_entity_1.Discount,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Discountlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update Discount by ID",
        type: discount_entity_1.Discount,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_discount_dto_1.UpdateDiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Discountlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete Discount by ID",
        type: discount_entity_1.Discount,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "remove", null);
exports.DiscountsController = DiscountsController = __decorate([
    (0, common_1.Controller)("discounts"),
    __metadata("design:paramtypes", [discounts_service_1.DiscountsService])
], DiscountsController);
//# sourceMappingURL=discounts.controller.js.map