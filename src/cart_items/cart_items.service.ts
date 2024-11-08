import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartItem } from "./entities/cart_item.entity";

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepo: Repository<CartItem>
  ) {}
  async create(createCartItemDto: CreateCartItemDto) {
    const cartItem = this.cartItemRepo.create(createCartItemDto);
    return await this.cartItemRepo.save(cartItem);
  }

  async findAll() {
    return this.cartItemRepo.find({ relations: ["cart", "book"] });
  }

  async findOne(id: number) {
    const cartItem = await this.cartItemRepo.findOneBy({ id });
    if (!cartItem) {
      throw new NotFoundException(`Cart Item with ID ${id} not found`);
    }
    return cartItem;
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return await this.cartItemRepo.update(id, updateCartItemDto);
  }

  async remove(id: number) {
    const cartItem = await this.cartItemRepo.findOne({ where: { id } });
    if (!cartItem) {
      throw new NotFoundException(`Cart Item with ID - ${id} not found`);
    }
    await this.cartItemRepo.delete(id);
    return { message: `Cart Item with ID - ${id} removed` };
  }
}
