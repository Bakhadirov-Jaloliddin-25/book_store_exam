"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsModule = void 0;
const common_1 = require("@nestjs/common");
const order_items_service_1 = require("./order_items.service");
const order_items_controller_1 = require("./order_items.controller");
const typeorm_1 = require("@nestjs/typeorm");
const order_item_entity_1 = require("./entities/order_item.entity");
let OrderItemsModule = class OrderItemsModule {
};
exports.OrderItemsModule = OrderItemsModule;
exports.OrderItemsModule = OrderItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_item_entity_1.OrderItem])],
        controllers: [order_items_controller_1.OrderItemsController],
        providers: [order_items_service_1.OrderItemsService],
    })
], OrderItemsModule);
//# sourceMappingURL=order_items.module.js.map