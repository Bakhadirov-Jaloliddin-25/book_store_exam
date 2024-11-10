import { DeliveryService } from "./delivery.service";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { Delivery } from "./entities/delivery.entity";
export declare class DeliveryController {
    private readonly deliveryService;
    constructor(deliveryService: DeliveryService);
    create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery>;
    findAll(): Promise<Delivery[]>;
    findOne(id: string): Promise<Delivery>;
    update(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise<Delivery>;
    remove(id: string): Promise<{
        message: string;
    }>;
    activateUser(link: string): Promise<{
        is_active: boolean;
        message: string;
    }>;
}
