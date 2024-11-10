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
exports.Author = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../books/entities/book.entity");
let Author = class Author {
};
exports.Author = Author;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Author unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Mehmet",
        description: "Author first name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Author.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Yildiz",
        description: "Author last name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Author.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1987-05-05, Turkey",
        description: "Author biography",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Author.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.Book, (book) => book.author),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
exports.Author = Author = __decorate([
    (0, typeorm_1.Entity)()
], Author);
//# sourceMappingURL=author.entity.js.map