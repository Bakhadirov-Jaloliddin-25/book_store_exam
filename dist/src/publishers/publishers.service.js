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
exports.PublishersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const publisher_entity_1 = require("./entities/publisher.entity");
const typeorm_2 = require("typeorm");
let PublishersService = class PublishersService {
    constructor(publisherRepo) {
        this.publisherRepo = publisherRepo;
    }
    async create(createPublisherDto) {
        const publisher = this.publisherRepo.create(createPublisherDto);
        return await this.publisherRepo.save(publisher);
    }
    async findAll() {
        return this.publisherRepo.find({ relations: ["books"] });
    }
    async findOne(id) {
        const publisher = await this.publisherRepo.findOneBy({ id });
        if (!publisher) {
            throw new common_1.NotFoundException(`Publisher with ID ${id} not found`);
        }
        return publisher;
    }
    async update(id, updatePublisherDto) {
        return await this.publisherRepo.update(id, updatePublisherDto);
    }
    async remove(id) {
        const publisher = await this.publisherRepo.findOne({ where: { id } });
        if (!publisher) {
            throw new common_1.NotFoundException(`Publisher with ID - ${id} not found`);
        }
        await this.publisherRepo.delete(id);
        return { message: `Publisher with ID - ${id} removed` };
    }
};
exports.PublishersService = PublishersService;
exports.PublishersService = PublishersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publisher_entity_1.Publisher)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublishersService);
//# sourceMappingURL=publishers.service.js.map