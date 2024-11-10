import { CreateStoreAddressDto } from "./dto/create-store_address.dto";
import { UpdateStoreAddressDto } from "./dto/update-store_address.dto";
import { StoreAddress } from "./entities/store_address.entity";
import { Repository } from "typeorm";
export declare class StoreAddressService {
    private readonly storeAddressRepo;
    constructor(storeAddressRepo: Repository<StoreAddress>);
    create(createStoreAddressDto: CreateStoreAddressDto): Promise<StoreAddress>;
    findAll(): Promise<StoreAddress[]>;
    findOne(id: number): Promise<StoreAddress>;
    update(id: number, updateStoreAddressDto: UpdateStoreAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
