import { OrderAddressService } from "./order_address.service";
import { CreateOrderAddressDto } from "./dto/create-order_address.dto";
import { UpdateOrderAddressDto } from "./dto/update-order_address.dto";
import { OrderAddress } from "./entities/order_address.entity";
export declare class OrderAddressController {
    private readonly orderAddressService;
    constructor(orderAddressService: OrderAddressService);
    create(createOrderAddressDto: CreateOrderAddressDto): Promise<OrderAddress>;
    findAll(): Promise<OrderAddress[]>;
    findOne(id: string): Promise<OrderAddress>;
    update(id: string, updateOrderAddressDto: UpdateOrderAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
