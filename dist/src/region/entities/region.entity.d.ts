import { OrderAddress } from "../../order_address/entities/order_address.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";
import { District } from "../../district/entities/district.entity";
export declare class Region {
    id: number;
    name: string;
    districts: District[];
    order_addresses: OrderAddress[];
    store_addresses: StoreAddress[];
}
