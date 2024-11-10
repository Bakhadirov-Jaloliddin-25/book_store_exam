import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";
import { Repository } from "typeorm";
export declare class CartService {
    private readonly cartRepo;
    constructor(cartRepo: Repository<Cart>);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
