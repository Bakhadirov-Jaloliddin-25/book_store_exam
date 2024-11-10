import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { Rating } from "./entities/rating.entity";
import { Repository } from "typeorm";
export declare class RatingsService {
    private readonly ratingRepo;
    constructor(ratingRepo: Repository<Rating>);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: number): Promise<Rating>;
    update(id: number, updateRatingDto: UpdateRatingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
