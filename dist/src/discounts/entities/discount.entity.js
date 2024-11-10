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
exports.Discount = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../books/entities/book.entity");
let Discount = class Discount {
};
exports.Discount = Discount;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Discount unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Discount.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Discount.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-01-01",
        description: "Discount start date",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Discount.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-12-31",
        description: "Discount end date",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Discount.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: "Discount percentage",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Discount.prototype, "percent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.discounts),
    (0, typeorm_1.JoinColumn)({ name: "book_id" }),
    __metadata("design:type", book_entity_1.Book)
], Discount.prototype, "book", void 0);
exports.Discount = Discount = __decorate([
    (0, typeorm_1.Entity)()
], Discount);
//# sourceMappingURL=discount.entity.js.map