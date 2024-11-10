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
exports.Cart = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const cart_item_entity_1 = require("../../cart_items/entities/cart_item.entity");
let Cart = class Cart {
};
exports.Cart = Cart;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Cart unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cart.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "open",
        description: "Cart status (open, closed, cancelled)",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cart.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2024-11-01T12:00:00.000Z",
        description: "Cart creation date",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Cart.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.carts),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.Customer)
], Cart.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItem, (cart_item) => cart_item.cart),
    __metadata("design:type", Array)
], Cart.prototype, "cart_items", void 0);
exports.Cart = Cart = __decorate([
    (0, typeorm_1.Entity)()
], Cart);
//# sourceMappingURL=cart.entity.js.map