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
exports.Publisher = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../books/entities/book.entity");
let Publisher = class Publisher {
};
exports.Publisher = Publisher;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Publisher unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Publisher.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Tasnim",
        description: "Publisher name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publisher.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Publisher phone number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publisher.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://www.tasnim.uz/en/",
        description: "Publisher contact information",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publisher.prototype, "contact_info", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.Book, (book) => book.publisher),
    __metadata("design:type", Array)
], Publisher.prototype, "books", void 0);
exports.Publisher = Publisher = __decorate([
    (0, typeorm_1.Entity)()
], Publisher);
//# sourceMappingURL=publisher.entity.js.map