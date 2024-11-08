import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { District } from "./entities/district.entity";
import { Repository } from "typeorm";

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepo: Repository<District>
  ) {}
  async create(createDistrictDto: CreateDistrictDto) {
    const district = this.districtRepo.create(createDistrictDto);
    return await this.districtRepo.save(district);
  }

  async findAll() {
    return this.districtRepo.find({
      relations: ["region", "order_addresses", "store_addresses"],
    });
  }

  async findOne(id: number) {
    const district = await this.districtRepo.findOneBy({ id });
    if (!district) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return await this.districtRepo.update(id, updateDistrictDto);
  }

  async remove(id: number) {
    const district = await this.districtRepo.findOne({ where: { id } });
    if (!district) {
      throw new NotFoundException(`District with ID - ${id} not found`);
    }
    await this.districtRepo.delete(id);
    return { message: `District with ID - ${id} removed` };
  }
}
