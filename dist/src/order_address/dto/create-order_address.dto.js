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
exports.CreateOrderAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrderAddressDto {
}
exports.CreateOrderAddressDto = CreateOrderAddressDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderAddressDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Region ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderAddressDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "District ID",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderAddressDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Street",
        description: "Street",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderAddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "35",
        description: "House number",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderAddressDto.prototype, "house", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "longitude: 0, latitude: 0",
        description: "Location",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderAddressDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "123456",
        description: "Post index",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderAddressDto.prototype, "post_index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Additional information",
        description: "Additional information",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderAddressDto.prototype, "info", void 0);
//# sourceMappingURL=create-order_address.dto.js.map