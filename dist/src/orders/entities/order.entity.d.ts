import { Payment } from "../../payment/entities/payment.entity";
import { Delivery } from "../../delivery/entities/delivery.entity";
import { Customer } from "../../customers/entities/customer.entity";
import { OrderItem } from "../../order_items/entities/order_item.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";
export declare class Order {
    id: number;
    customer_id: number;
    order_address_id: number;
    book_store_id: number;
    delivery_id: number;
    order_date: Date;
    total_price: number;
    status: string;
    payments: Payment[];
    delivery: Delivery;
    customer: Customer;
    order_items: OrderItem[];
    order_address: OrderAddress;
}
