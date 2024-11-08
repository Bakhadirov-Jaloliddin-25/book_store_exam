import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentMethod } from "./entities/payment_method.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepo: Repository<PaymentMethod>
  ) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const paymentMethod = this.paymentMethodRepo.create(createPaymentMethodDto);
    return await this.paymentMethodRepo.save(paymentMethod);
  }

  async findAll() {
    return this.paymentMethodRepo.find({relations: ["payments"]});
  }

  async findOne(id: number) {
    const paymentMethod = await this.paymentMethodRepo.findOneBy({ id });
    if (!paymentMethod) {
      throw new NotFoundException(`Payment Method with ID ${id} not found`);
    }
    return paymentMethod;
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return await this.paymentMethodRepo.update(id, updatePaymentMethodDto);
  }

  async remove(id: number) {
    const paymentMethod = await this.paymentMethodRepo.findOne({
      where: { id },
    });
    if (!paymentMethod) {
      throw new NotFoundException(`Payment Method with ID - ${id} not found`);
    }
    await this.paymentMethodRepo.delete(id);
    return { message: `Payment Method with ID - ${id} removed` };
  }
}
