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
exports.OrderItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../books/entities/book.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
let OrderItem = class OrderItem {
};
exports.OrderItem = OrderItem;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order Item unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItem.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItem.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: "Quantity of books ordered",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.order_items),
    (0, typeorm_1.JoinColumn)({ name: "book_id" }),
    __metadata("design:type", book_entity_1.Book)
], OrderItem.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.order_items),
    (0, typeorm_1.JoinColumn)({ name: "order_id" }),
    __metadata("design:type", order_entity_1.Order)
], OrderItem.prototype, "order", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, typeorm_1.Entity)()
], OrderItem);
//# sourceMappingURL=order_item.entity.js.map