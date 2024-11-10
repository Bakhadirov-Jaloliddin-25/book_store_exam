import { OrderItemsService } from "./order_items.service";
import { CreateOrderItemDto } from "./dto/create-order_item.dto";
import { OrderItem } from "./entities/order_item.entity";
import { UpdateOrderItemDto } from "./dto/update-order_item.dto";
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem>;
    findAll(): Promise<OrderItem[]>;
    findOne(id: string): Promise<OrderItem>;
    update(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
