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
exports.BookStore = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../books/entities/book.entity");
const store_address_entity_1 = require("../../store_address/entities/store_address.entity");
let BookStore = class BookStore {
};
exports.BookStore = BookStore;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Bookstore unique ID (auto increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BookStore.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Azon",
        description: "Bookstore name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookStore.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998-99-123-45-67",
        description: "Bookstore phone number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookStore.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://www.azon.com",
        description: "Bookstore website URL",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookStore.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Bookstore address ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookStore.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.Book, (book) => book.book_store),
    __metadata("design:type", Array)
], BookStore.prototype, "books", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_address_entity_1.StoreAddress, (storeAddress) => storeAddress.book_stores),
    (0, typeorm_1.JoinColumn)({ name: "address_id" }),
    __metadata("design:type", store_address_entity_1.StoreAddress)
], BookStore.prototype, "address", void 0);
exports.BookStore = BookStore = __decorate([
    (0, typeorm_1.Entity)()
], BookStore);
//# sourceMappingURL=book_store.entity.js.map