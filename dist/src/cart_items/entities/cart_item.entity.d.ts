import { Cart } from "../../cart/entities/cart.entity";
import { Book } from "../../books/entities/book.entity";
export declare class CartItem {
    id: number;
    cart_id: number;
    book_id: number;
    quantity: number;
    cart: Cart;
    book: Book;
}
