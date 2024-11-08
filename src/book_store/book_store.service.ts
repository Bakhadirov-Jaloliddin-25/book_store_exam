import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookStoreDto } from "./dto/create-book_store.dto";
import { UpdateBookStoreDto } from "./dto/update-book_store.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { BookStore } from "./entities/book_store.entity";
import { Repository } from "typeorm";

@Injectable()
export class BookStoreService {
  constructor(
    @InjectRepository(BookStore)
    private readonly bookStoreRepo: Repository<BookStore>
  ) {}
  async create(createBookStoreDto: CreateBookStoreDto) {
    const bookStore = this.bookStoreRepo.create(createBookStoreDto);
    return await this.bookStoreRepo.save(bookStore);
  }

  async findAll() {
    return this.bookStoreRepo.find({ relations: ["books", "address"] });
  }

  async findOne(id: number) {
    const bookStore = await this.bookStoreRepo.findOneBy({ id });
    if (!bookStore) {
      throw new NotFoundException(`BookStore with ID ${id} not found`);
    }
    return bookStore;
  }

  async update(id: number, updateBookStoreDto: UpdateBookStoreDto) {
    return await this.bookStoreRepo.update(id, updateBookStoreDto);
  }

  async remove(id: number) {
    const bookStore = await this.bookStoreRepo.findOne({ where: { id } });
    if (!bookStore) {
      throw new NotFoundException(`BookStore with ID - ${id} not found`);
    }
    await this.bookStoreRepo.delete(id);
    return { message: `BookStore with ID - ${id} removed` };
  }
}
