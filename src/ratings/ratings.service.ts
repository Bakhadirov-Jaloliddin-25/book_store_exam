import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Rating } from "./entities/rating.entity";
import { Repository } from "typeorm";

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating) private readonly ratingRepo: Repository<Rating>
  ) {}
  async create(createRatingDto: CreateRatingDto) {
    const rating = this.ratingRepo.create(createRatingDto);
    return await this.ratingRepo.save(rating);
  }

  async findAll() {
    return this.ratingRepo.find({ relations: ["customer", "book"] });
  }

  async findOne(id: number) {
    const rating = await this.ratingRepo.findOneBy({ id });
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
    return rating;
  }

  async update(id: number, updateRatingDto: UpdateRatingDto) {
    return await this.ratingRepo.update(id, updateRatingDto);
  }

  async remove(id: number) {
    const rating = await this.ratingRepo.findOne({ where: { id } });
    if (!rating) {
      throw new NotFoundException(`Rating with ID - ${id} not found`);
    }
    await this.ratingRepo.delete(id);
    return { message: `Rating with ID - ${id} removed` };
  }
}
