import { Order } from "../../orders/entities/order.entity";
export declare class Delivery {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    is_active: boolean;
    hashed_password?: string;
    hashed_refresh_token?: string;
    activation_link?: string;
    orders: Order[];
}
