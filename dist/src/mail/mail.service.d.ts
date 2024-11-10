import { MailerService } from "@nestjs-modules/mailer";
import { Customer } from "../customers/entities/customer.entity";
import { Delivery } from "../delivery/entities/delivery.entity";
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMailToCustomer(customer: Customer): Promise<void>;
    sendMailToDelivery(delivery: Delivery): Promise<void>;
}
