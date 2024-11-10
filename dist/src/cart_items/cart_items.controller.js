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
exports.CartItemsController = void 0;
const common_1 = require("@nestjs/common");
const cart_items_service_1 = require("./cart_items.service");
const create_cart_item_dto_1 = require("./dto/create-cart_item.dto");
const update_cart_item_dto_1 = require("./dto/update-cart_item.dto");
const cart_item_entity_1 = require("./entities/cart_item.entity");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let CartItemsController = class CartItemsController {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
    }
    create(createCartItemDto) {
        return this.cartItemsService.create(createCartItemDto);
    }
    findAll() {
        return this.cartItemsService.findAll();
    }
    findOne(id) {
        return this.cartItemsService.findOne(+id);
    }
    update(id, updateCartItemDto) {
        return this.cartItemsService.update(+id, updateCartItemDto);
    }
    remove(id) {
        return this.cartItemsService.remove(+id);
    }
};
exports.CartItemsController = CartItemsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "CartItem yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created CartItem", type: cart_item_entity_1.CartItem }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha CartItemlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of CartItems",
        type: [cart_item_entity_1.CartItem],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha CartItemlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get CartItem by ID",
        type: cart_item_entity_1.CartItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha CartItemlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update CartItem by ID",
        type: cart_item_entity_1.CartItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_item_dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha CartItemlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete CartItem by ID",
        type: cart_item_entity_1.CartItem,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "remove", null);
exports.CartItemsController = CartItemsController = __decorate([
    (0, common_1.Controller)("cart-items"),
    __metadata("design:paramtypes", [cart_items_service_1.CartItemsService])
], CartItemsController);
//# sourceMappingURL=cart_items.controller.js.map