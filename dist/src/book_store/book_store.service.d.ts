import { CreateBookStoreDto } from "./dto/create-book_store.dto";
import { UpdateBookStoreDto } from "./dto/update-book_store.dto";
import { BookStore } from "./entities/book_store.entity";
import { Repository } from "typeorm";
export declare class BookStoreService {
    private readonly bookStoreRepo;
    constructor(bookStoreRepo: Repository<BookStore>);
    create(createBookStoreDto: CreateBookStoreDto): Promise<BookStore>;
    findAll(): Promise<BookStore[]>;
    findOne(id: number): Promise<BookStore>;
    update(id: number, updateBookStoreDto: UpdateBookStoreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
