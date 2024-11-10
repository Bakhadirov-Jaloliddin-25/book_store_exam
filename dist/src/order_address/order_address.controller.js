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
exports.OrderAddressController = void 0;
const common_1 = require("@nestjs/common");
const order_address_service_1 = require("./order_address.service");
const create_order_address_dto_1 = require("./dto/create-order_address.dto");
const update_order_address_dto_1 = require("./dto/update-order_address.dto");
const swagger_1 = require("@nestjs/swagger");
const order_address_entity_1 = require("./entities/order_address.entity");
const admin_guard_1 = require("../guards/admin.guard");
let OrderAddressController = class OrderAddressController {
    constructor(orderAddressService) {
        this.orderAddressService = orderAddressService;
    }
    create(createOrderAddressDto) {
        return this.orderAddressService.create(createOrderAddressDto);
    }
    findAll() {
        return this.orderAddressService.findAll();
    }
    findOne(id) {
        return this.orderAddressService.findOne(+id);
    }
    update(id, updateOrderAddressDto) {
        return this.orderAddressService.update(+id, updateOrderAddressDto);
    }
    remove(id) {
        return this.orderAddressService.remove(+id);
    }
};
exports.OrderAddressController = OrderAddressController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "OrderAddress yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created OrderAddress",
        type: order_address_entity_1.OrderAddress,
    }),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_address_dto_1.CreateOrderAddressDto]),
    __metadata("design:returntype", void 0)
], OrderAddressController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha OrderAddresslarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of OrderAddresss",
        type: [order_address_entity_1.OrderAddress],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderAddressController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderAddresslarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get OrderAddress by ID",
        type: order_address_entity_1.OrderAddress,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderAddressController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderAddresslarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update OrderAddress by ID",
        type: order_address_entity_1.OrderAddress,
    }),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_address_dto_1.UpdateOrderAddressDto]),
    __metadata("design:returntype", void 0)
], OrderAddressController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderAddresslarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete OrderAddress by ID",
        type: order_address_entity_1.OrderAddress,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderAddressController.prototype, "remove", null);
exports.OrderAddressController = OrderAddressController = __decorate([
    (0, common_1.Controller)("order-address"),
    __metadata("design:paramtypes", [order_address_service_1.OrderAddressService])
], OrderAddressController);
//# sourceMappingURL=order_address.controller.js.map