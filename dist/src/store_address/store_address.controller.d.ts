import { StoreAddressService } from "./store_address.service";
import { CreateStoreAddressDto } from "./dto/create-store_address.dto";
import { UpdateStoreAddressDto } from "./dto/update-store_address.dto";
import { StoreAddress } from "./entities/store_address.entity";
export declare class StoreAddressController {
    private readonly storeAddressService;
    constructor(storeAddressService: StoreAddressService);
    create(createStoreAddressDto: CreateStoreAddressDto): Promise<StoreAddress>;
    findAll(): Promise<StoreAddress[]>;
    findOne(id: string): Promise<StoreAddress>;
    update(id: string, updateStoreAddressDto: UpdateStoreAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
