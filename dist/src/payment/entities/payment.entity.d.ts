import { PaymentMethod } from "../../payment_method/entities/payment_method.entity";
import { Order } from "../../orders/entities/order.entity";
export declare class Payment {
    id: number;
    order_id: number;
    payment_date: Date;
    amount: number;
    payment_method_id: number;
    status: string;
    payment_method: PaymentMethod;
    order: Order;
}
