import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";
import { Repository } from "typeorm";
export declare class AuthorsService {
    private readonly authorRepo;
    constructor(authorRepo: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
