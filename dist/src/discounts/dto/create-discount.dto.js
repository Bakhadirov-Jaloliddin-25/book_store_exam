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
exports.CreateDiscountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDiscountDto {
}
exports.CreateDiscountDto = CreateDiscountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID for discount",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-01-01",
        description: "Discount start date",
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDiscountDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2022-01-31",
        description: "Discount end date",
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDiscountDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 20,
        description: "Discount percentage",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "percents", void 0);
//# sourceMappingURL=create-discount.dto.js.map