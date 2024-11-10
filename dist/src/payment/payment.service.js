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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_entity_1 = require("./entities/payment.entity");
const typeorm_2 = require("typeorm");
let PaymentService = class PaymentService {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    async create(createPaymentDto) {
        const payment = this.paymentRepo.create(createPaymentDto);
        return await this.paymentRepo.save(payment);
    }
    async findAll() {
        return this.paymentRepo.find({ relations: ["payment_method", "order"] });
    }
    async findOne(id) {
        const payment = await this.paymentRepo.findOneBy({ id });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        return payment;
    }
    async update(id, updatePaymentDto) {
        return await this.paymentRepo.update(id, updatePaymentDto);
    }
    async remove(id) {
        const payment = await this.paymentRepo.findOne({ where: { id } });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID - ${id} not found`);
        }
        await this.paymentRepo.delete(id);
        return { message: `Payment with ID - ${id} removed` };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map