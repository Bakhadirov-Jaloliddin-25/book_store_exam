import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateStoreAddressDto } from "./dto/create-store_address.dto";
import { UpdateStoreAddressDto } from "./dto/update-store_address.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { StoreAddress } from "./entities/store_address.entity";
import { Repository } from "typeorm";

@Injectable()
export class StoreAddressService {
  constructor(
    @InjectRepository(StoreAddress)
    private readonly storeAddressRepo: Repository<StoreAddress>
  ) {}
  async create(createStoreAddressDto: CreateStoreAddressDto) {
    const storeAddress = this.storeAddressRepo.create(createStoreAddressDto);
    return await this.storeAddressRepo.save(storeAddress);
  }

  async findAll() {
    return this.storeAddressRepo.find({
      relations: ["book_stores", "region", "district"],
    });
  }

  async findOne(id: number) {
    const storeAddress = await this.storeAddressRepo.findOneBy({ id });
    if (!storeAddress) {
      throw new NotFoundException(`StoreAddress with ID ${id} not found`);
    }
    return storeAddress;
  }

  async update(id: number, updateStoreAddressDto: UpdateStoreAddressDto) {
    return await this.storeAddressRepo.update(id, updateStoreAddressDto);
  }

  async remove(id: number) {
    const storeAddress = await this.storeAddressRepo.findOne({ where: { id } });
    if (!storeAddress) {
      throw new NotFoundException(`StoreAddress with ID - ${id} not found`);
    }
    await this.storeAddressRepo.delete(id);
    return { message: `StoreAddress with ID - ${id} removed` };
  }
}
