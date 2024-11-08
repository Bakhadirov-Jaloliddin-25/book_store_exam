import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private readonly authorRepo: Repository<Author>
  ) {}
  async create(createAuthorDto: CreateAuthorDto) {
    const author = this.authorRepo.create(createAuthorDto);
    return await this.authorRepo.save(author);
  }

  async findAll() {
    return this.authorRepo.find({ relations: ["books"] });
  }

  async findOne(id: number) {
    const author = await this.authorRepo.findOneBy({ id });
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepo.update(id, updateAuthorDto);
  }

  async remove(id: number) {
    const author = await this.authorRepo.findOne({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Author with ID - ${id} not found`);
    }
    await this.authorRepo.delete(id);
    return { message: `Author with ID - ${id} removed` };
  }
}
