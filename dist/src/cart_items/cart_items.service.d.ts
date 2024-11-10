import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { Repository } from "typeorm";
import { CartItem } from "./entities/cart_item.entity";
export declare class CartItemsService {
    private readonly cartItemRepo;
    constructor(cartItemRepo: Repository<CartItem>);
    create(createCartItemDto: CreateCartItemDto): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    findOne(id: number): Promise<CartItem>;
    update(id: number, updateCartItemDto: UpdateCartItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
