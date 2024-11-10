import { Book } from "../../books/entities/book.entity";
export declare class Author {
    id: number;
    first_name: string;
    last_name: string;
    bio: string;
    books: Book[];
}
