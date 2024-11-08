import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "../../payment/entities/payment.entity";

@Entity()
export class PaymentMethod {
  @ApiProperty({
    example: 1,
    description: "Payment method unique ID (auto-increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Credit Card",
    description: "Payment method type",
  })
  @Column()
  type: string;

  @ApiProperty({
    example: "Visa",
    description: "Payment method brand",
  })
  @Column()
  description: string;

  @OneToMany(() => Payment, (payment) => payment.payment_method)
  payments: Payment[];
}
