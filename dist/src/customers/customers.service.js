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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("./entities/customer.entity");
const typeorm_2 = require("typeorm");
let CustomersService = class CustomersService {
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    async create(createCustomerDto) {
        const customer = this.customerRepo.create(createCustomerDto);
        return await this.customerRepo.save(customer);
    }
    async findAll() {
        return this.customerRepo.find({
            relations: ["carts", "ratings", "reviews", "orders", "order_addresses"],
        });
    }
    async findOne(id) {
        const customer = await this.customerRepo.findOneBy({ id });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with ID ${id} not found`);
        }
        return customer;
    }
    async findCustomerByEmail(email) {
        const customer = await this.customerRepo.findOneBy({ email });
        return customer;
    }
    async update(id, updateCustomerDto) {
        const customer = await this.customerRepo.findOne({ where: { id } });
        Object.assign(customer, updateCustomerDto);
        return this.customerRepo.save(customer);
    }
    async remove(id) {
        const customer = await this.customerRepo.findOne({ where: { id } });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with ID - ${id} not found`);
        }
        await this.customerRepo.delete(id);
        return { message: `Customer with ID - ${id} removed` };
    }
    async activateCustomer(link) {
        const customer = await this.customerRepo.findOne({
            where: { activation_link: link },
        });
        if (!customer) {
            throw new common_1.NotFoundException("Customer not found");
        }
        if (customer.is_active) {
            throw new common_1.BadRequestException("Customer already activated");
        }
        customer.is_active = true;
        await this.customerRepo.save(customer);
        return {
            is_active: customer.is_active,
            message: "Customer activated successfully",
        };
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
//# sourceMappingURL=customers.service.js.map