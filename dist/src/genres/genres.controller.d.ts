import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./entities/genre.entity";
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    update(id: string, updateGenreDto: UpdateGenreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
