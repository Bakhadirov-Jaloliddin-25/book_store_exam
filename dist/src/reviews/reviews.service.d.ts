import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { Review } from "./entities/review.entity";
import { Repository } from "typeorm";
export declare class ReviewsService {
    private readonly reviewRepo;
    constructor(reviewRepo: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<Review>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
