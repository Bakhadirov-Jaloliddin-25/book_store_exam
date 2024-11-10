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
exports.CreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAdminDto {
}
exports.CreateAdminDto = CreateAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Admin",
        description: "Admin name",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "admin@gmail.com",
        description: "Admin email",
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Admin phone number",
    }),
    (0, class_validator_1.IsPhoneNumber)("UZ"),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qwerty12345",
        description: "Admin password",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qwerty12345",
        description: "Admin password confirmation",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "confirm_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "Is admin creator?",
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdminDto.prototype, "is_creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "Is admin active?",
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdminDto.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "$2b$10$8j7j1L58hJ9b2Y07y7.m6O6c.6.d1905677355282666240",
        description: "Hashed refresh token",
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "$2b$10$8j7j1L58hJ9b2Y07y7.m6O6c.6.d1905677355282666240",
        description: "Hashed password",
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://example.com/verify/admin/12345",
        description: "Admin activation link",
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "activation_link", void 0);
//# sourceMappingURL=create-admin.dto.js.map