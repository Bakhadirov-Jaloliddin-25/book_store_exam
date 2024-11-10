import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { Region } from "./entities/region.entity";
import { Repository } from "typeorm";
export declare class RegionService {
    private readonly regionRepo;
    constructor(regionRepo: Repository<Region>);
    create(createRegionDto: CreateRegionDto): Promise<Region>;
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    update(id: number, updateRegionDto: UpdateRegionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
