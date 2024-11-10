import { Book } from "../../books/entities/book.entity";
export declare class Discount {
    id: number;
    book_id: number;
    start_date: Date;
    end_date: Date;
    percent: number;
    book: Book;
}
