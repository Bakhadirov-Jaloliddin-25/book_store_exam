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
exports.CreateDeliveryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDeliveryDto {
}
exports.CreateDeliveryDto = CreateDeliveryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Vinicius",
        description: "Delivery name",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "crybaby@gmail.com",
        description: "Delivery email",
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "$Vinicius11",
        description: "Delivery password",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "$Vinicius11",
        description: "Delivery confirm password",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "confirm_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Delivery phone number",
    }),
    (0, class_validator_1.IsPhoneNumber)("UZ"),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "CR7ronaldo",
        description: "Hashed Password",
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Hashed Refresh Token",
        description: "Hashed Refresh Token",
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "link",
        description: "Activation Link",
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "activation_link", void 0);
//# sourceMappingURL=create-delivery.dto.js.map