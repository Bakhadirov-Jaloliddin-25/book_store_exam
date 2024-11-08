import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Delivery } from "./entities/delivery.entity";
import { Repository } from "typeorm";

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepo: Repository<Delivery>
  ) {}
  async create(createDeliveryDto: CreateDeliveryDto) {
    const delivery = this.deliveryRepo.create(createDeliveryDto);
    return await this.deliveryRepo.save(delivery);
  }

  async findAll() {
    return this.deliveryRepo.find({ relations: ["orders"] });
  }

  async findOne(id: number) {
    const delivery = await this.deliveryRepo.findOneBy({ id });
    if (!delivery) {
      throw new NotFoundException(`Delivery with ID ${id} not found`);
    }
    return delivery;
  }

  async findDeliveryByEmail(email: string) {
    const delivery = await this.deliveryRepo.findOneBy({ email });
    return delivery;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    const delivery = await this.deliveryRepo.findOne({ where: { id } });
    Object.assign(delivery, updateDeliveryDto);
    return this.deliveryRepo.save(delivery);
  }

  async remove(id: number) {
    const delivery = await this.deliveryRepo.findOne({ where: { id } });
    if (!delivery) {
      throw new NotFoundException(`Delivery with ID - ${id} not found`);
    }
    await this.deliveryRepo.delete(id);
    return { message: `Delivery with ID - ${id} removed` };
  }

  async activateDelivery(
    link: string
  ): Promise<{ is_active: boolean; message: string }> {
    const delivery = await this.deliveryRepo.findOne({
      where: { activation_link: link },
    });

    if (!delivery) {
      throw new NotFoundException("Delivery not found");
    }

    if (delivery.is_active) {
      throw new BadRequestException("Delivery already activated");
    }

    delivery.is_active = true;
    await this.deliveryRepo.save(delivery);

    return {
      is_active: delivery.is_active,
      message: "Delivery activated successfully",
    };
  }
}
