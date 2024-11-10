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
exports.OrderAddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_address_entity_1 = require("./entities/order_address.entity");
const typeorm_2 = require("typeorm");
let OrderAddressService = class OrderAddressService {
    constructor(orderAdressRepo) {
        this.orderAdressRepo = orderAdressRepo;
    }
    async create(createOrderAdressDto) {
        const orderAdress = this.orderAdressRepo.create(createOrderAdressDto);
        return await this.orderAdressRepo.save(orderAdress);
    }
    async findAll() {
        return this.orderAdressRepo.find({
            relations: ["customer", "orders", "region", "district"],
        });
    }
    async findOne(id) {
        const orderAdress = await this.orderAdressRepo.findOneBy({ id });
        if (!orderAdress) {
            throw new common_1.NotFoundException(`OrderAdress with ID ${id} not found`);
        }
        return orderAdress;
    }
    async update(id, updateOrderAdressDto) {
        return await this.orderAdressRepo.update(id, updateOrderAdressDto);
    }
    async remove(id) {
        const orderAdress = await this.orderAdressRepo.findOne({ where: { id } });
        if (!orderAdress) {
            throw new common_1.NotFoundException(`OrderAdress with ID - ${id} not found`);
        }
        await this.orderAdressRepo.delete(id);
        return { message: `OrderAdress with ID - ${id} removed` };
    }
};
exports.OrderAddressService = OrderAddressService;
exports.OrderAddressService = OrderAddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_address_entity_1.OrderAddress)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderAddressService);
//# sourceMappingURL=order_address.service.js.map