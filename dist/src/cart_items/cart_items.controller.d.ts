import { CartItemsService } from "./cart_items.service";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { CartItem } from "./entities/cart_item.entity";
export declare class CartItemsController {
    private readonly cartItemsService;
    constructor(cartItemsService: CartItemsService);
    create(createCartItemDto: CreateCartItemDto): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    findOne(id: string): Promise<CartItem>;
    update(id: string, updateCartItemDto: UpdateCartItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
