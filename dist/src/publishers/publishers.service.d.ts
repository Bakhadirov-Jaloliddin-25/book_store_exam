import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { Publisher } from "./entities/publisher.entity";
import { Repository } from "typeorm";
export declare class PublishersService {
    private readonly publisherRepo;
    constructor(publisherRepo: Repository<Publisher>);
    create(createPublisherDto: CreatePublisherDto): Promise<Publisher>;
    findAll(): Promise<Publisher[]>;
    findOne(id: number): Promise<Publisher>;
    update(id: number, updatePublisherDto: UpdatePublisherDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
