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
exports.Customer = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("../../cart/entities/cart.entity");
const rating_entity_1 = require("../../ratings/entities/rating.entity");
const review_entity_1 = require("../../reviews/entities/review.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const order_address_entity_1 = require("../../order_address/entities/order_address.entity");
let Customer = class Customer {
};
exports.Customer = Customer;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Cristiano",
        description: "First Name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Ronaldo",
        description: "Last Name",
    }),
    __metadata("design:type", String)
], Customer.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "cr7ronaldo@gmail.com",
        description: "Email",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CR7ronaldo",
        description: "Password",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Phone Number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "Customer status (active)",
    }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Customer.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-01-01",
        description: "Created At",
    }),
    (0, typeorm_1.Column)({ default: new Date() }),
    __metadata("design:type", Date)
], Customer.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qwerty12345$",
        description: "Customer password",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Customer refresh token",
        description: "Customer refresh token",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://example.com/verify/customer/12345",
        description: "Customer activation link",
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Customer.prototype, "activation_link", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.Cart, (cart) => cart.customer),
    __metadata("design:type", Array)
], Customer.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.customer),
    __metadata("design:type", Array)
], Customer.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.customer),
    __metadata("design:type", Array)
], Customer.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.customer),
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_address_entity_1.OrderAddress, (order_address) => order_address.customer),
    __metadata("design:type", Array)
], Customer.prototype, "order_addresses", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);
//# sourceMappingURL=customer.entity.js.map