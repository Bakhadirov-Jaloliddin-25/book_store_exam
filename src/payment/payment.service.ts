import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./entities/payment.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private readonly paymentRepo: Repository<Payment>
  ) {}
  async create(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentRepo.create(createPaymentDto);
    return await this.paymentRepo.save(payment);
  }

  async findAll() {
    return this.paymentRepo.find({ relations: ["payment_method", "order"] });
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findOneBy({ id });
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return await this.paymentRepo.update(id, updatePaymentDto);
  }

  async remove(id: number) {
    const payment = await this.paymentRepo.findOne({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Payment with ID - ${id} not found`);
    }
    await this.paymentRepo.delete(id);
    return { message: `Payment with ID - ${id} removed` };
  }
}
