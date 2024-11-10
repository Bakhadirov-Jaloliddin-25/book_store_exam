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
exports.PaymentMethodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_method_entity_1 = require("./entities/payment_method.entity");
const typeorm_2 = require("typeorm");
let PaymentMethodService = class PaymentMethodService {
    constructor(paymentMethodRepo) {
        this.paymentMethodRepo = paymentMethodRepo;
    }
    async create(createPaymentMethodDto) {
        const paymentMethod = this.paymentMethodRepo.create(createPaymentMethodDto);
        return await this.paymentMethodRepo.save(paymentMethod);
    }
    async findAll() {
        return this.paymentMethodRepo.find({ relations: ["payments"] });
    }
    async findOne(id) {
        const paymentMethod = await this.paymentMethodRepo.findOneBy({ id });
        if (!paymentMethod) {
            throw new common_1.NotFoundException(`Payment Method with ID ${id} not found`);
        }
        return paymentMethod;
    }
    async update(id, updatePaymentMethodDto) {
        return await this.paymentMethodRepo.update(id, updatePaymentMethodDto);
    }
    async remove(id) {
        const paymentMethod = await this.paymentMethodRepo.findOne({
            where: { id },
        });
        if (!paymentMethod) {
            throw new common_1.NotFoundException(`Payment Method with ID - ${id} not found`);
        }
        await this.paymentMethodRepo.delete(id);
        return { message: `Payment Method with ID - ${id} removed` };
    }
};
exports.PaymentMethodService = PaymentMethodService;
exports.PaymentMethodService = PaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_method_entity_1.PaymentMethod)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentMethodService);
//# sourceMappingURL=payment_method.service.js.map