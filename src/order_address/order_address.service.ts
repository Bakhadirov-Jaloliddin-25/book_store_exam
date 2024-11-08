import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderAddressDto } from "./dto/create-order_address.dto";
import { UpdateOrderAddressDto } from "./dto/update-order_address.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderAddress } from "./entities/order_address.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderAddressService {
  constructor(
    @InjectRepository(OrderAddress)
    private readonly orderAdressRepo: Repository<OrderAddress>
  ) {}
  async create(createOrderAdressDto: CreateOrderAddressDto) {
    const orderAdress = this.orderAdressRepo.create(createOrderAdressDto);
    return await this.orderAdressRepo.save(orderAdress);
  }

  async findAll() {
    return this.orderAdressRepo.find({
      relations: ["customer", "orders", "region", "district"],
    });
  }

  async findOne(id: number) {
    const orderAdress = await this.orderAdressRepo.findOneBy({ id });
    if (!orderAdress) {
      throw new NotFoundException(`OrderAdress with ID ${id} not found`);
    }
    return orderAdress;
  }

  async update(id: number, updateOrderAdressDto: UpdateOrderAddressDto) {
    return await this.orderAdressRepo.update(id, updateOrderAdressDto);
  }

  async remove(id: number) {
    const orderAdress = await this.orderAdressRepo.findOne({ where: { id } });
    if (!orderAdress) {
      throw new NotFoundException(`OrderAdress with ID - ${id} not found`);
    }
    await this.orderAdressRepo.delete(id);
    return { message: `OrderAdress with ID - ${id} removed` };
  }
}
