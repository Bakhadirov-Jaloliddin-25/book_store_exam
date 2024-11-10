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
exports.Admin = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Admin = class Admin {
};
exports.Admin = Admin;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Admin unique ID (autoIncrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Admin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Admin",
        description: "Admin name",
    }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Admin.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "admin@gmail.com",
        description: "Admin email",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998991234567",
        description: "Admin phone number",
    }),
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qwerty12345$",
        description: "Admin password",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Admin refresh token",
        description: "Admin refresh token",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "Admin status (active)",
    }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: "Admin creator (false)",
    }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://example.com/admin/activate/123456",
        description: "Admin activation link",
    }),
    __metadata("design:type", String)
], Admin.prototype, "activation_link", void 0);
exports.Admin = Admin = __decorate([
    (0, typeorm_1.Entity)()
], Admin);
//# sourceMappingURL=admin.entity.js.map