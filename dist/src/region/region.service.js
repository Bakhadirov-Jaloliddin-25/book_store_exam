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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("./entities/region.entity");
const typeorm_2 = require("typeorm");
let RegionService = class RegionService {
    constructor(regionRepo) {
        this.regionRepo = regionRepo;
    }
    async create(createRegionDto) {
        const region = this.regionRepo.create(createRegionDto);
        return await this.regionRepo.save(region);
    }
    async findAll() {
        return this.regionRepo.find({
            relations: ["districts, order_addresses, store_addresses"],
        });
    }
    async findOne(id) {
        const region = await this.regionRepo.findOneBy({ id });
        if (!region) {
            throw new common_1.NotFoundException(`Region with ID ${id} not found`);
        }
        return region;
    }
    async update(id, updateRegionDto) {
        return await this.regionRepo.update(id, updateRegionDto);
    }
    async remove(id) {
        const region = await this.regionRepo.findOne({ where: { id } });
        if (!region) {
            throw new common_1.NotFoundException(`Region with ID - ${id} not found`);
        }
        await this.regionRepo.delete(id);
        return { message: `Region with ID - ${id} removed` };
    }
};
exports.RegionService = RegionService;
exports.RegionService = RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegionService);
//# sourceMappingURL=region.service.js.map