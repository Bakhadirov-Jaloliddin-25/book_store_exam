import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./entities/payment_method.entity";
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    findAll(): Promise<PaymentMethod[]>;
    findOne(id: string): Promise<PaymentMethod>;
    update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
