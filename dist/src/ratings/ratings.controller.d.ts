import { RatingsService } from "./ratings.service";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { Rating } from "./entities/rating.entity";
export declare class RatingsController {
    private readonly ratingsService;
    constructor(ratingsService: RatingsService);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: string): Promise<Rating>;
    update(id: string, updateRatingDto: UpdateRatingDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
