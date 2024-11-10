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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const delivery_entity_1 = require("../../delivery/entities/delivery.entity");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const order_item_entity_1 = require("../../order_items/entities/order_item.entity");
const order_address_entity_1 = require("../../order_address/entities/order_address.entity");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order address ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "order_address_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book store ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "book_store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Delivery ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "delivery_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-01-01T15:30:00Z",
        description: "Order date",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Order.prototype, "order_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 400,
        description: "Total price",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Completed",
        description: "Order status",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.order),
    __metadata("design:type", Array)
], Order.prototype, "payments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => delivery_entity_1.Delivery, (delivery) => delivery.orders),
    (0, typeorm_1.JoinColumn)({ name: "delivery_id" }),
    __metadata("design:type", delivery_entity_1.Delivery)
], Order.prototype, "delivery", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.orders),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.Customer)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItem, (order_item) => order_item.order),
    __metadata("design:type", Array)
], Order.prototype, "order_items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_address_entity_1.OrderAddress, (order_address) => order_address.orders),
    (0, typeorm_1.JoinColumn)({ name: "order_address_id" }),
    __metadata("design:type", order_address_entity_1.OrderAddress)
], Order.prototype, "order_address", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
//# sourceMappingURL=order.entity.js.map