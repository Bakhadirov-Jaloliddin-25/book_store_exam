import { Customer } from "../../customers/entities/customer.entity";
import { CartItem } from "../../cart_items/entities/cart_item.entity";
export declare class Cart {
    id: number;
    customer_id: number;
    status: string;
    created_at: Date;
    customer: Customer;
    cart_items: CartItem[];
}
