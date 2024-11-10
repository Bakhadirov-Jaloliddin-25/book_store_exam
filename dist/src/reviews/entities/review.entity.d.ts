import { Customer } from "../../customers/entities/customer.entity";
import { Book } from "../../books/entities/book.entity";
export declare class Review {
    id: number;
    book_id: number;
    customer_id: number;
    review: string;
    customer: Customer;
    book: Book;
}
