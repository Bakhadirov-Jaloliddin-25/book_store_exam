import { Book } from "../../books/entities/book.entity";
export declare class Publisher {
    id: number;
    name: string;
    phone_number: string;
    contact_info: string;
    books: Book[];
}
