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
exports.DiscountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discount_entity_1 = require("./entities/discount.entity");
const typeorm_2 = require("typeorm");
let DiscountsService = class DiscountsService {
    constructor(discountRepo) {
        this.discountRepo = discountRepo;
    }
    async create(createDiscountDto) {
        const discount = this.discountRepo.create(createDiscountDto);
        return await this.discountRepo.save(discount);
    }
    async findAll() {
        return this.discountRepo.find({ relations: ["book"] });
    }
    async findOne(id) {
        const discount = await this.discountRepo.findOneBy({ id });
        if (!discount) {
            throw new common_1.NotFoundException(`Discount with ID ${id} not found`);
        }
        return discount;
    }
    async update(id, updateDiscountDto) {
        return await this.discountRepo.update(id, updateDiscountDto);
    }
    async remove(id) {
        const discount = await this.discountRepo.findOne({ where: { id } });
        if (!discount) {
            throw new common_1.NotFoundException(`Discount with ID - ${id} not found`);
        }
        await this.discountRepo.delete(id);
        return { message: `Discount with ID - ${id} removed` };
    }
};
exports.DiscountsService = DiscountsService;
exports.DiscountsService = DiscountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discount_entity_1.Discount)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DiscountsService);
//# sourceMappingURL=discounts.service.js.map