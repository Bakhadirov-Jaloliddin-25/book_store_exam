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
exports.Delivery = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../../orders/entities/order.entity");
let Delivery = class Delivery {
};
exports.Delivery = Delivery;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Delivery unique ID (auto-increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Delivery.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Vinicius",
        description: "Delivery name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Delivery.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "crybaby@gmail.com",
        description: "Delivery email",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Delivery.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "$Vinicius11$",
        description: "Delivery password",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Delivery.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Delivery phone number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Delivery.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "Delivery status (active)",
    }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Delivery.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qwerty12345$",
        description: "Customer password",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Delivery.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Customer refresh token",
        description: "Customer refresh token",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Delivery.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://example.com/activation/12345",
        description: "Delivery activation link",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Delivery.prototype, "activation_link", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.delivery),
    __metadata("design:type", Array)
], Delivery.prototype, "orders", void 0);
exports.Delivery = Delivery = __decorate([
    (0, typeorm_1.Entity)()
], Delivery);
//# sourceMappingURL=delivery.entity.js.map