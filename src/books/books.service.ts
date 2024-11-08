import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>
  ) {}
  async create(createBookDto: CreateBookDto) {
    const book = this.bookRepo.create(createBookDto);
    return await this.bookRepo.save(book);
  }

  async findAll() {
    return this.bookRepo.find({
      relations: [
        "author",
        "publisher",
        "genre",
        "book_store",
        "discounts",
        "order_items",
        "cart_items",
        "ratings",
        "reviews",
      ],
    });
  }

  async findOne(id: number) {
    const book = await this.bookRepo.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return await this.bookRepo.update(id, updateBookDto);
  }

  async remove(id: number) {
    const book = await this.bookRepo.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID - ${id} not found`);
    }
    await this.bookRepo.delete(id);
    return { message: `Book with ID - ${id} removed` };
  }
}
