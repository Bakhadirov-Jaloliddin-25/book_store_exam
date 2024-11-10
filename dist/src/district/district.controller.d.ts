import { DistrictService } from "./district.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./entities/district.entity";
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    create(createDistrictDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: string): Promise<District>;
    update(id: string, updateDistrictDto: UpdateDistrictDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
