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
exports.Payment = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const payment_method_entity_1 = require("../../payment_method/entities/payment_method.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Payment unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2024-11-01",
        description: "Payment date",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Payment.prototype, "payment_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 100,
        description: "Payment amount",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Payment method ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "payment_method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Completed",
        description: "Payment status",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_method_entity_1.PaymentMethod, (payment_method) => payment_method.payments),
    (0, typeorm_1.JoinColumn)({ name: "payment_method_id" }),
    __metadata("design:type", payment_method_entity_1.PaymentMethod)
], Payment.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.payments),
    (0, typeorm_1.JoinColumn)({ name: "order_id" }),
    __metadata("design:type", order_entity_1.Order)
], Payment.prototype, "order", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)()
], Payment);
//# sourceMappingURL=payment.entity.js.map