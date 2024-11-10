import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./entities/payment_method.entity";
import { Repository } from "typeorm";
export declare class PaymentMethodService {
    private readonly paymentMethodRepo;
    constructor(paymentMethodRepo: Repository<PaymentMethod>);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    findAll(): Promise<PaymentMethod[]>;
    findOne(id: number): Promise<PaymentMethod>;
    update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
