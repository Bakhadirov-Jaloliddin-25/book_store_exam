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
exports.Book = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const author_entity_1 = require("../../authors/entities/author.entity");
const publisher_entity_1 = require("../../publishers/entities/publisher.entity");
const genre_entity_1 = require("../../genres/entities/genre.entity");
const book_store_entity_1 = require("../../book_store/entities/book_store.entity");
const discount_entity_1 = require("../../discounts/entities/discount.entity");
const order_item_entity_1 = require("../../order_items/entities/order_item.entity");
const cart_item_entity_1 = require("../../cart_items/entities/cart_item.entity");
const rating_entity_1 = require("../../ratings/entities/rating.entity");
const review_entity_1 = require("../../reviews/entities/review.entity");
let Book = class Book {
};
exports.Book = Book;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book unique ID (auto-increment)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Iskanja",
        description: "Book name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "The Great Gatsby",
        description: "Book title",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 120,
        description: "Price",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Author ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Genre ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "genre_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Publisher ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "publisher_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 250,
        description: "Number of pages",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "num_of_pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2022,
        description: "Publication year",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Book.prototype, "year_of_publication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 250,
        description: "Book stock",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Book store ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "book_store_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.Author, (author) => author.books),
    (0, typeorm_1.JoinColumn)({ name: "author_id" }),
    __metadata("design:type", author_entity_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genre_entity_1.Genre, (genre) => genre.books),
    (0, typeorm_1.JoinColumn)({ name: "genre_id" }),
    __metadata("design:type", genre_entity_1.Genre)
], Book.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publisher_entity_1.Publisher, (publisher) => publisher.books),
    (0, typeorm_1.JoinColumn)({ name: "publisher_id" }),
    __metadata("design:type", publisher_entity_1.Publisher)
], Book.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_store_entity_1.BookStore, (book_store) => book_store.books),
    (0, typeorm_1.JoinColumn)({ name: "book_store_id" }),
    __metadata("design:type", book_store_entity_1.BookStore)
], Book.prototype, "book_store", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => discount_entity_1.Discount, (discount) => discount.book),
    __metadata("design:type", Array)
], Book.prototype, "discounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItem, (order_item) => order_item.book),
    __metadata("design:type", Array)
], Book.prototype, "order_items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItem, (cart_item) => cart_item.book),
    __metadata("design:type", Array)
], Book.prototype, "cart_items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.book),
    __metadata("design:type", Array)
], Book.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.book),
    __metadata("design:type", Array)
], Book.prototype, "reviews", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);
//# sourceMappingURL=book.entity.js.map