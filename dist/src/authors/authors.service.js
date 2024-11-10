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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("./entities/author.entity");
const typeorm_2 = require("typeorm");
let AuthorsService = class AuthorsService {
    constructor(authorRepo) {
        this.authorRepo = authorRepo;
    }
    async create(createAuthorDto) {
        const author = this.authorRepo.create(createAuthorDto);
        return await this.authorRepo.save(author);
    }
    async findAll() {
        return this.authorRepo.find({ relations: ["books"] });
    }
    async findOne(id) {
        const author = await this.authorRepo.findOneBy({ id });
        if (!author) {
            throw new common_1.NotFoundException(`Author with ID ${id} not found`);
        }
        return author;
    }
    async update(id, updateAuthorDto) {
        return await this.authorRepo.update(id, updateAuthorDto);
    }
    async remove(id) {
        const author = await this.authorRepo.findOne({ where: { id } });
        if (!author) {
            throw new common_1.NotFoundException(`Author with ID - ${id} not found`);
        }
        await this.authorRepo.delete(id);
        return { message: `Author with ID - ${id} removed` };
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorsService);
//# sourceMappingURL=authors.service.js.map