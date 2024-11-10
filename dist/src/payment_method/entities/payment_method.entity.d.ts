import { Payment } from "../../payment/entities/payment.entity";
export declare class PaymentMethod {
    id: number;
    type: string;
    description: string;
    payments: Payment[];
}
