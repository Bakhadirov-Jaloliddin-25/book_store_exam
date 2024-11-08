import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Region } from "./entities/region.entity";
import { Repository } from "typeorm";

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private readonly regionRepo: Repository<Region>
  ) {}
  async create(createRegionDto: CreateRegionDto) {
    const region = this.regionRepo.create(createRegionDto);
    return await this.regionRepo.save(region);
  }

  async findAll() {
    return this.regionRepo.find({
      relations: ["districts, order_addresses, store_addresses"],
    });
  }

  async findOne(id: number) {
    const region = await this.regionRepo.findOneBy({ id });
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return await this.regionRepo.update(id, updateRegionDto);
  }

  async remove(id: number) {
    const region = await this.regionRepo.findOne({ where: { id } });
    if (!region) {
      throw new NotFoundException(`Region with ID - ${id} not found`);
    }
    await this.regionRepo.delete(id);
    return { message: `Region with ID - ${id} removed` };
  }
}
