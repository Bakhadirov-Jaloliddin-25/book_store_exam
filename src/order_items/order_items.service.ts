import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderItemDto } from "./dto/create-order_item.dto";
import { UpdateOrderItemDto } from "./dto/update-order_item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "./entities/order_item.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>
  ) {}
  async create(createOrderItemDto: CreateOrderItemDto) {
    const orderItem = this.orderItemRepo.create(createOrderItemDto);
    return await this.orderItemRepo.save(orderItem);
  }

  async findAll() {
    return this.orderItemRepo.find({ relations: ["book", "order"] });
  }

  async findOne(id: number) {
    const orderItem = await this.orderItemRepo.findOneBy({ id });
    if (!orderItem) {
      throw new NotFoundException(`OrderItem with ID ${id} not found`);
    }
    return orderItem;
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return await this.orderItemRepo.update(id, updateOrderItemDto);
  }

  async remove(id: number) {
    const orderItem = await this.orderItemRepo.findOne({ where: { id } });
    if (!orderItem) {
      throw new NotFoundException(`OrderItem with ID - ${id} not found`);
    }
    await this.orderItemRepo.delete(id);
    return { message: `OrderItem with ID - ${id} removed` };
  }
}
