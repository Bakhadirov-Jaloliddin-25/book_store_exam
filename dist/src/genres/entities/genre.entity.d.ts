import { Book } from "../../books/entities/book.entity";
export declare class Genre {
    id: number;
    name: string;
    description: string;
    books: Book[];
}
