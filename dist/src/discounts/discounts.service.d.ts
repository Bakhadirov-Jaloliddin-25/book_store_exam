import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { Discount } from "./entities/discount.entity";
import { Repository } from "typeorm";
export declare class DiscountsService {
    private readonly discountRepo;
    constructor(discountRepo: Repository<Discount>);
    create(createDiscountDto: CreateDiscountDto): Promise<Discount>;
    findAll(): Promise<Discount[]>;
    findOne(id: number): Promise<Discount>;
    update(id: number, updateDiscountDto: UpdateDiscountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
