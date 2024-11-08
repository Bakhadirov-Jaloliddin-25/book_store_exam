import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentMethod } from "../../payment_method/entities/payment_method.entity";
import { Order } from "../../orders/entities/order.entity";

@Entity()
export class Payment {
  @ApiProperty({
    example: 1,
    description: "Payment unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: "Order ID",
  })
  @Column()
  order_id: number;

  @ApiProperty({
    example: "2024-11-01",
    description: "Payment date",
  })
  @Column()
  payment_date: Date;

  @ApiProperty({
    example: 100,
    description: "Payment amount",
  })
  @Column()
  amount: number;

  @ApiProperty({
    example: 1,
    description: "Payment method ID",
  })
  @Column()
  payment_method_id: number;

  @ApiProperty({
    example: "Completed",
    description: "Payment status",
  })
  @Column()
  status: string;

  @ManyToOne(() => PaymentMethod, (payment_method) => payment_method.payments)
  @JoinColumn({ name: "payment_method_id" })
  payment_method: PaymentMethod;

  @ManyToOne(() => Order, (order) => order.payments)
  @JoinColumn({ name: "order_id" })
  order: Order;
}
