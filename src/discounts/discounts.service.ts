import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Discount } from "./entities/discount.entity";
import { Repository } from "typeorm";

@Injectable()
export class DiscountsService {
  constructor(
    @InjectRepository(Discount)
    private readonly discountRepo: Repository<Discount>
  ) {}
  async create(createDiscountDto: CreateDiscountDto) {
    const discount = this.discountRepo.create(createDiscountDto);
    return await this.discountRepo.save(discount);
  }

  async findAll() {
    return this.discountRepo.find({ relations: ["book"] });
  }

  async findOne(id: number) {
    const discount = await this.discountRepo.findOneBy({ id });
    if (!discount) {
      throw new NotFoundException(`Discount with ID ${id} not found`);
    }
    return discount;
  }

  async update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return await this.discountRepo.update(id, updateDiscountDto);
  }

  async remove(id: number) {
    const discount = await this.discountRepo.findOne({ where: { id } });
    if (!discount) {
      throw new NotFoundException(`Discount with ID - ${id} not found`);
    }
    await this.discountRepo.delete(id);
    return { message: `Discount with ID - ${id} removed` };
  }
}
