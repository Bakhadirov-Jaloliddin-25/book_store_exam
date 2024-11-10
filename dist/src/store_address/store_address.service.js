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
exports.StoreAddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const store_address_entity_1 = require("./entities/store_address.entity");
const typeorm_2 = require("typeorm");
let StoreAddressService = class StoreAddressService {
    constructor(storeAddressRepo) {
        this.storeAddressRepo = storeAddressRepo;
    }
    async create(createStoreAddressDto) {
        const storeAddress = this.storeAddressRepo.create(createStoreAddressDto);
        return await this.storeAddressRepo.save(storeAddress);
    }
    async findAll() {
        return this.storeAddressRepo.find({
            relations: ["book_stores", "region", "district"],
        });
    }
    async findOne(id) {
        const storeAddress = await this.storeAddressRepo.findOneBy({ id });
        if (!storeAddress) {
            throw new common_1.NotFoundException(`StoreAddress with ID ${id} not found`);
        }
        return storeAddress;
    }
    async update(id, updateStoreAddressDto) {
        return await this.storeAddressRepo.update(id, updateStoreAddressDto);
    }
    async remove(id) {
        const storeAddress = await this.storeAddressRepo.findOne({ where: { id } });
        if (!storeAddress) {
            throw new common_1.NotFoundException(`StoreAddress with ID - ${id} not found`);
        }
        await this.storeAddressRepo.delete(id);
        return { message: `StoreAddress with ID - ${id} removed` };
    }
};
exports.StoreAddressService = StoreAddressService;
exports.StoreAddressService = StoreAddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(store_address_entity_1.StoreAddress)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoreAddressService);
//# sourceMappingURL=store_address.service.js.map