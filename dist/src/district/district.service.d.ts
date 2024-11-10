import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./entities/district.entity";
import { Repository } from "typeorm";
export declare class DistrictService {
    private readonly districtRepo;
    constructor(districtRepo: Repository<District>);
    create(createDistrictDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateDistrictDto: UpdateDistrictDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
