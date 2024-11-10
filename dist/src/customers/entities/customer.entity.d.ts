import { Cart } from "../../cart/entities/cart.entity";
import { Rating } from "../../ratings/entities/rating.entity";
import { Review } from "../../reviews/entities/review.entity";
import { Order } from "../../orders/entities/order.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";
export declare class Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    is_active: boolean;
    created_at: Date;
    hashed_password?: string;
    hashed_refresh_token?: string;
    activation_link: string;
    carts: Cart[];
    ratings: Rating[];
    reviews: Review[];
    orders: Order[];
    order_addresses: OrderAddress[];
}
