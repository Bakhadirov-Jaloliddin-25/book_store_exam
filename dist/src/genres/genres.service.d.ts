import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./entities/genre.entity";
import { Repository } from "typeorm";
export declare class GenresService {
    private readonly genreRepo;
    constructor(genreRepo: Repository<Genre>);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    update(id: number, updateGenreDto: UpdateGenreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
