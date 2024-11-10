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
exports.Rating = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const book_entity_1 = require("../../books/entities/book.entity");
let Rating = class Rating {
};
exports.Rating = Rating;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Rating unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: "Rating value (1-5)",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rating.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rating.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.ratings),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.Customer)
], Rating.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.ratings),
    (0, typeorm_1.JoinColumn)({ name: "book_id" }),
    __metadata("design:type", book_entity_1.Book)
], Rating.prototype, "book", void 0);
exports.Rating = Rating = __decorate([
    (0, typeorm_1.Entity)()
], Rating);
//# sourceMappingURL=rating.entity.js.map