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
exports.OrderItemsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_items_service_1 = require("./order_items.service");
const create_order_item_dto_1 = require("./dto/create-order_item.dto");
const order_item_entity_1 = require("./entities/order_item.entity");
const update_order_item_dto_1 = require("./dto/update-order_item.dto");
const admin_guard_1 = require("../guards/admin.guard");
let OrderItemsController = class OrderItemsController {
    constructor(orderItemsService) {
        this.orderItemsService = orderItemsService;
    }
    create(createOrderItemDto) {
        return this.orderItemsService.create(createOrderItemDto);
    }
    findAll() {
        return this.orderItemsService.findAll();
    }
    findOne(id) {
        return this.orderItemsService.findOne(+id);
    }
    update(id, updateOrderItemDto) {
        return this.orderItemsService.update(+id, updateOrderItemDto);
    }
    remove(id) {
        return this.orderItemsService.remove(+id);
    }
};
exports.OrderItemsController = OrderItemsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "OrderItem yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created OrderItem",
        type: order_item_entity_1.OrderItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_item_dto_1.CreateOrderItemDto]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha OrderItemlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of OrderItems",
        type: [order_item_entity_1.OrderItem],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderItemlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get OrderItem by ID",
        type: order_item_entity_1.OrderItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderItemlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update OrderItem by ID",
        type: order_item_entity_1.OrderItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_item_dto_1.UpdateOrderItemDto]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha OrderItemlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete OrderItem by ID",
        type: order_item_entity_1.OrderItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderItemsController.prototype, "remove", null);
exports.OrderItemsController = OrderItemsController = __decorate([
    (0, common_1.Controller)("order-items"),
    __metadata("design:paramtypes", [order_items_service_1.OrderItemsService])
], OrderItemsController);
//# sourceMappingURL=order_items.controller.js.map