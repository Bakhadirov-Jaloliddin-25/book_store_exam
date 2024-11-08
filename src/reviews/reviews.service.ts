import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "./entities/review.entity";
import { Repository } from "typeorm";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    const review = this.reviewRepo.create(createReviewDto);
    return await this.reviewRepo.save(review);
  }

  async findAll() {
    return this.reviewRepo.find({ relations: ["customer", "book"] });
  }

  async findOne(id: number) {
    const review = await this.reviewRepo.findOneBy({ id });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.reviewRepo.update(id, updateReviewDto);
  }

  async remove(id: number) {
    const review = await this.reviewRepo.findOne({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with ID - ${id} not found`);
    }
    await this.reviewRepo.delete(id);
    return { message: `Review with ID - ${id} removed` };
  }
}
