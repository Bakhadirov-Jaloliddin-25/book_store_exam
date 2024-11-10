import { BookStoreService } from "./book_store.service";
import { CreateBookStoreDto } from "./dto/create-book_store.dto";
import { UpdateBookStoreDto } from "./dto/update-book_store.dto";
import { BookStore } from "./entities/book_store.entity";
export declare class BookStoreController {
    private readonly bookStoreService;
    constructor(bookStoreService: BookStoreService);
    create(createBookStoreDto: CreateBookStoreDto): Promise<BookStore>;
    findAll(): Promise<BookStore[]>;
    findOne(id: string): Promise<BookStore>;
    update(id: string, updateBookStoreDto: UpdateBookStoreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
