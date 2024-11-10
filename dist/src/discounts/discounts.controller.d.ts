import { DiscountsService } from "./discounts.service";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { Discount } from "./entities/discount.entity";
export declare class DiscountsController {
    private readonly discountsService;
    constructor(discountsService: DiscountsService);
    create(createDiscountDto: CreateDiscountDto): Promise<Discount>;
    findAll(): Promise<Discount[]>;
    findOne(id: string): Promise<Discount>;
    update(id: string, updateDiscountDto: UpdateDiscountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
