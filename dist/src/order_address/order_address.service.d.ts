import { CreateOrderAddressDto } from "./dto/create-order_address.dto";
import { UpdateOrderAddressDto } from "./dto/update-order_address.dto";
import { OrderAddress } from "./entities/order_address.entity";
import { Repository } from "typeorm";
export declare class OrderAddressService {
    private readonly orderAdressRepo;
    constructor(orderAdressRepo: Repository<OrderAddress>);
    create(createOrderAdressDto: CreateOrderAddressDto): Promise<OrderAddress>;
    findAll(): Promise<OrderAddress[]>;
    findOne(id: number): Promise<OrderAddress>;
    update(id: number, updateOrderAdressDto: UpdateOrderAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
