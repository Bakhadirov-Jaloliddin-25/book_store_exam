import { PublishersService } from "./publishers.service";
import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { Publisher } from "./entities/publisher.entity";
export declare class PublishersController {
    private readonly publishersService;
    constructor(publishersService: PublishersService);
    create(createPublisherDto: CreatePublisherDto): Promise<Publisher>;
    findAll(): Promise<Publisher[]>;
    findOne(id: string): Promise<Publisher>;
    update(id: string, updatePublisherDto: UpdatePublisherDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
