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
exports.CartItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_item_entity_1 = require("./entities/cart_item.entity");
let CartItemsService = class CartItemsService {
    constructor(cartItemRepo) {
        this.cartItemRepo = cartItemRepo;
    }
    async create(createCartItemDto) {
        const cartItem = this.cartItemRepo.create(createCartItemDto);
        return await this.cartItemRepo.save(cartItem);
    }
    async findAll() {
        return this.cartItemRepo.find({ relations: ["cart", "book"] });
    }
    async findOne(id) {
        const cartItem = await this.cartItemRepo.findOneBy({ id });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Cart Item with ID ${id} not found`);
        }
        return cartItem;
    }
    async update(id, updateCartItemDto) {
        return await this.cartItemRepo.update(id, updateCartItemDto);
    }
    async remove(id) {
        const cartItem = await this.cartItemRepo.findOne({ where: { id } });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Cart Item with ID - ${id} not found`);
        }
        await this.cartItemRepo.delete(id);
        return { message: `Cart Item with ID - ${id} removed` };
    }
};
exports.CartItemsService = CartItemsService;
exports.CartItemsService = CartItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartItemsService);
//# sourceMappingURL=cart_items.service.js.map