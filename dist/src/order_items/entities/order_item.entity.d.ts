import { Book } from "../../books/entities/book.entity";
import { Order } from "../../orders/entities/order.entity";
export declare class OrderItem {
    id: number;
    order_id: number;
    book_id: number;
    quantity: number;
    book: Book;
    order: Order;
}
