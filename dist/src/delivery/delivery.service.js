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
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const delivery_entity_1 = require("./entities/delivery.entity");
const typeorm_2 = require("typeorm");
let DeliveryService = class DeliveryService {
    constructor(deliveryRepo) {
        this.deliveryRepo = deliveryRepo;
    }
    async create(createDeliveryDto) {
        const delivery = this.deliveryRepo.create(createDeliveryDto);
        return await this.deliveryRepo.save(delivery);
    }
    async findAll() {
        return this.deliveryRepo.find({ relations: ["orders"] });
    }
    async findOne(id) {
        const delivery = await this.deliveryRepo.findOneBy({ id });
        if (!delivery) {
            throw new common_1.NotFoundException(`Delivery with ID ${id} not found`);
        }
        return delivery;
    }
    async findDeliveryByEmail(email) {
        const delivery = await this.deliveryRepo.findOneBy({ email });
        return delivery;
    }
    async update(id, updateDeliveryDto) {
        const delivery = await this.deliveryRepo.findOne({ where: { id } });
        Object.assign(delivery, updateDeliveryDto);
        return this.deliveryRepo.save(delivery);
    }
    async remove(id) {
        const delivery = await this.deliveryRepo.findOne({ where: { id } });
        if (!delivery) {
            throw new common_1.NotFoundException(`Delivery with ID - ${id} not found`);
        }
        await this.deliveryRepo.delete(id);
        return { message: `Delivery with ID - ${id} removed` };
    }
    async activateDelivery(link) {
        const delivery = await this.deliveryRepo.findOne({
            where: { activation_link: link },
        });
        if (!delivery) {
            throw new common_1.NotFoundException("Delivery not found");
        }
        if (delivery.is_active) {
            throw new common_1.BadRequestException("Delivery already activated");
        }
        delivery.is_active = true;
        await this.deliveryRepo.save(delivery);
        return {
            is_active: delivery.is_active,
            message: "Delivery activated successfully",
        };
    }
};
exports.DeliveryService = DeliveryService;
exports.DeliveryService = DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(delivery_entity_1.Delivery)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DeliveryService);
//# sourceMappingURL=delivery.service.js.map