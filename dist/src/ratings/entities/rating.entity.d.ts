import { Customer } from "../../customers/entities/customer.entity";
import { Book } from "../../books/entities/book.entity";
export declare class Rating {
    id: number;
    rating: number;
    book_id: number;
    customer_id: number;
    customer: Customer;
    book: Book;
}
