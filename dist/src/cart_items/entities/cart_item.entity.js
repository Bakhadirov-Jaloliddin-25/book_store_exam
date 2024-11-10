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
exports.CartItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("../../cart/entities/cart.entity");
const book_entity_1 = require("../../books/entities/book.entity");
let CartItem = class CartItem {
};
exports.CartItem = CartItem;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Cart item unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Cart ID",
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "cart_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID",
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: "Quantity of books in the cart",
    }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.Cart, (cart) => cart.cart_items),
    (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
    __metadata("design:type", cart_entity_1.Cart)
], CartItem.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.cart_items),
    (0, typeorm_1.JoinColumn)({ name: "book_id" }),
    __metadata("design:type", book_entity_1.Book)
], CartItem.prototype, "book", void 0);
exports.CartItem = CartItem = __decorate([
    (0, typeorm_1.Entity)()
], CartItem);
//# sourceMappingURL=cart_item.entity.js.map