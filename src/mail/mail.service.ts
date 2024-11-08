import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { Customer } from "../customers/entities/customer.entity";
import { Delivery } from "../delivery/entities/delivery.entity";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendMailToCustomer(customer: Customer) {
    const url = `${process.env.API_URL}:${process.env.PORT}/customers/activate/${customer.activation_link}`;
    await this.mailerService.sendMail({
      to: customer.email,
      subject: "Activate your account",
      template: "./confirm",
      context: {
        name: customer.first_name + " " + customer.last_name,
        url,
      },
    });
  }
  async sendMailToDelivery(delivery: Delivery) {
    const url = `${process.env.API_URL}:${process.env.PORT}/delivery/activate/${delivery.activation_link}`;
    await this.mailerService.sendMail({
      to: delivery.email,
      subject: "Activate your account",
      template: "./confirm",
      context: {
        name: delivery.name,
        url,
      },
    });
  }
}
