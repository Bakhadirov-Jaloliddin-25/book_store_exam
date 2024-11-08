import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "./entities/cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepo: Repository<Cart>
  ) {}
  async create(createCartDto: CreateCartDto) {
    const cart = this.cartRepo.create(createCartDto);
    return await this.cartRepo.save(cart);
  }

  async findAll() {
    return this.cartRepo.find({ relations: ["customer", "cart_items"] });
  }

  async findOne(id: number) {
    const cart = await this.cartRepo.findOneBy({ id });
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await this.cartRepo.update(id, updateCartDto);
  }

  async remove(id: number) {
    const cart = await this.cartRepo.findOne({ where: { id } });
    if (!cart) {
      throw new NotFoundException(`Cart with ID - ${id} not found`);
    }
    await this.cartRepo.delete(id);
    return { message: `Cart with ID - ${id} removed` };
  }
}
