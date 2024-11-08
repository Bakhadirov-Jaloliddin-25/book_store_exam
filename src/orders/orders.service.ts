import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepo.create(createOrderDto);
    return await this.orderRepo.save(order);
  }

  async findAll() {
    return this.orderRepo.find({
      relations: [
        "payments",
        "delivery",
        "customer",
        "order_items",
        "order_address",
      ],
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepo.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepo.update(id, updateOrderDto);
  }

  async remove(id: number) {
    const order = await this.orderRepo.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with ID - ${id} not found`);
    }
    await this.orderRepo.delete(id);
    return { message: `Order with ID - ${id} removed` };
  }
}
