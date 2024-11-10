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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("typeorm");
let BooksService = class BooksService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async create(createBookDto) {
        const book = this.bookRepo.create(createBookDto);
        return await this.bookRepo.save(book);
    }
    async findAll() {
        return this.bookRepo.find({
            relations: [
                "author",
                "publisher",
                "genre",
                "book_store",
                "discounts",
                "order_items",
                "cart_items",
                "ratings",
                "reviews",
            ],
        });
    }
    async findOne(id) {
        const book = await this.bookRepo.findOneBy({ id });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
    async update(id, updateBookDto) {
        return await this.bookRepo.update(id, updateBookDto);
    }
    async remove(id) {
        const book = await this.bookRepo.findOne({ where: { id } });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID - ${id} not found`);
        }
        await this.bookRepo.delete(id);
        return { message: `Book with ID - ${id} removed` };
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map