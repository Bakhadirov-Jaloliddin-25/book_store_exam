import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Genre } from "./entities/genre.entity";
import { Repository } from "typeorm";

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre) private readonly genreRepo: Repository<Genre>
  ) {}
  async create(createGenreDto: CreateGenreDto) {
    const genre = this.genreRepo.create(createGenreDto);
    return await this.genreRepo.save(genre);
  }

  async findAll() {
    return this.genreRepo.find({ relations: ["books"] });
  }

  async findOne(id: number) {
    const genre = await this.genreRepo.findOneBy({ id });
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return genre;
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    return await this.genreRepo.update(id, updateGenreDto);
  }

  async remove(id: number) {
    const genre = await this.genreRepo.findOne({ where: { id } });
    if (!genre) {
      throw new NotFoundException(`Genre with ID - ${id} not found`);
    }
    await this.genreRepo.delete(id);
    return { message: `Genre with ID - ${id} removed` };
  }
}
