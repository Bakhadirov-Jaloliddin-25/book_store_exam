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
exports.BookStoreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_store_entity_1 = require("./entities/book_store.entity");
const typeorm_2 = require("typeorm");
let BookStoreService = class BookStoreService {
    constructor(bookStoreRepo) {
        this.bookStoreRepo = bookStoreRepo;
    }
    async create(createBookStoreDto) {
        const bookStore = this.bookStoreRepo.create(createBookStoreDto);
        return await this.bookStoreRepo.save(bookStore);
    }
    async findAll() {
        return this.bookStoreRepo.find({ relations: ["books", "address"] });
    }
    async findOne(id) {
        const bookStore = await this.bookStoreRepo.findOneBy({ id });
        if (!bookStore) {
            throw new common_1.NotFoundException(`BookStore with ID ${id} not found`);
        }
        return bookStore;
    }
    async update(id, updateBookStoreDto) {
        return await this.bookStoreRepo.update(id, updateBookStoreDto);
    }
    async remove(id) {
        const bookStore = await this.bookStoreRepo.findOne({ where: { id } });
        if (!bookStore) {
            throw new common_1.NotFoundException(`BookStore with ID - ${id} not found`);
        }
        await this.bookStoreRepo.delete(id);
        return { message: `BookStore with ID - ${id} removed` };
    }
};
exports.BookStoreService = BookStoreService;
exports.BookStoreService = BookStoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_store_entity_1.BookStore)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookStoreService);
//# sourceMappingURL=book_store.service.js.map