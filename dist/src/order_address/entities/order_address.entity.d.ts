import { Customer } from "../../customers/entities/customer.entity";
import { Order } from "../../orders/entities/order.entity";
import { Region } from "../../region/entities/region.entity";
import { District } from "../../district/entities/district.entity";
export declare class OrderAddress {
    id: number;
    customer_id: number;
    region_id: number;
    district_id: number;
    street: string;
    house: string;
    location: string;
    post_index: string;
    info: string;
    customer: Customer;
    orders: Order[];
    region: Region;
    district: District;
}
