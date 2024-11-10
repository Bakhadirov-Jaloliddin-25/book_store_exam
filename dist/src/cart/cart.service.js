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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const typeorm_2 = require("typeorm");
let CartService = class CartService {
    constructor(cartRepo) {
        this.cartRepo = cartRepo;
    }
    async create(createCartDto) {
        const cart = this.cartRepo.create(createCartDto);
        return await this.cartRepo.save(cart);
    }
    async findAll() {
        return this.cartRepo.find({ relations: ["customer", "cart_items"] });
    }
    async findOne(id) {
        const cart = await this.cartRepo.findOneBy({ id });
        if (!cart) {
            throw new common_1.NotFoundException(`Cart with ID ${id} not found`);
        }
        return cart;
    }
    async update(id, updateCartDto) {
        return await this.cartRepo.update(id, updateCartDto);
    }
    async remove(id) {
        const cart = await this.cartRepo.findOne({ where: { id } });
        if (!cart) {
            throw new common_1.NotFoundException(`Cart with ID - ${id} not found`);
        }
        await this.cartRepo.delete(id);
        return { message: `Cart with ID - ${id} removed` };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map