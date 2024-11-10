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
exports.CreateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Iskanja",
        description: "Book name",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "This book is about China in 1949",
        description: "Book description",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 250,
        description: "Book price",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Author ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Genre ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "genre_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Publisher ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "publisher_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 210,
        description: "Number of pages",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "num_of_pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2022,
        description: "Book publication year",
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBookDto.prototype, "year_of_publication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 100,
        description: "Book stock",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book store ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "book_store_id", void 0);
//# sourceMappingURL=create-book.dto.js.map