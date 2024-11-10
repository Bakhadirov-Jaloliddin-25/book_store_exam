import { CreateOrderItemDto } from "./dto/create-order_item.dto";
import { UpdateOrderItemDto } from "./dto/update-order_item.dto";
import { OrderItem } from "./entities/order_item.entity";
import { Repository } from "typeorm";
export declare class OrderItemsService {
    private readonly orderItemRepo;
    constructor(orderItemRepo: Repository<OrderItem>);
    create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem>;
    findAll(): Promise<OrderItem[]>;
    findOne(id: number): Promise<OrderItem>;
    update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
