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
exports.CreateOrderItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrderItemDto {
}
exports.CreateOrderItemDto = CreateOrderItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: "Quantity of books ordered",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "quantity", void 0);
//# sourceMappingURL=create-order_item.dto.js.map