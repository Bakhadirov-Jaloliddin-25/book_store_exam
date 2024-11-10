import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { Delivery } from "./entities/delivery.entity";
import { Repository } from "typeorm";
export declare class DeliveryService {
    private readonly deliveryRepo;
    constructor(deliveryRepo: Repository<Delivery>);
    create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery>;
    findAll(): Promise<Delivery[]>;
    findOne(id: number): Promise<Delivery>;
    findDeliveryByEmail(email: string): Promise<Delivery>;
    update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<Delivery>;
    remove(id: number): Promise<{
        message: string;
    }>;
    activateDelivery(link: string): Promise<{
        is_active: boolean;
        message: string;
    }>;
}
