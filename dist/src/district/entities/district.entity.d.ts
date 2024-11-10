import { Region } from "../../region/entities/region.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";
export declare class District {
    id: number;
    name: string;
    region_id: number;
    region: Region;
    order_addresses: OrderAddress[];
    store_addresses: StoreAddress[];
}
