import { Book } from "../../books/entities/book.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";
export declare class BookStore {
    id: number;
    name: string;
    phone_number: string;
    description: string;
    address_id: number;
    books: Book[];
    address: StoreAddress;
}
