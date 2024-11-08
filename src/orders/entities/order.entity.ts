import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Payment } from "../../payment/entities/payment.entity";
import { Delivery } from "../../delivery/entities/delivery.entity";
import { Customer } from "../../customers/entities/customer.entity";
import { OrderItem } from "../../order_items/entities/order_item.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @Column()
  customer_id: number;

  @ApiProperty({
    example: 1,
    description: "Order address ID",
  })
  @Column()
  order_address_id: number;

  @ApiProperty({
    example: 1,
    description: "Book store ID",
  })
  @Column()
  book_store_id: number;

  @ApiProperty({
    example: 1,
    description: "Delivery ID",
  })
  @Column()
  delivery_id: number;

  @ApiProperty({
    example: "2022-01-01T15:30:00Z",
    description: "Order date",
  })
  @Column()
  order_date: Date;

  @ApiProperty({
    example: 400,
    description: "Total price",
  })
  @Column()
  total_price: number;

  @ApiProperty({
    example: "Completed",
    description: "Order status",
  })
  @Column()
  status: string;

  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[];

  @ManyToOne(() => Delivery, (delivery) => delivery.orders)
  @JoinColumn({ name: "delivery_id" })
  delivery: Delivery;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @OneToMany(() => OrderItem, (order_item) => order_item.order)
  order_items: OrderItem[];

  @ManyToOne(() => OrderAddress, (order_address) => order_address.orders)
  @JoinColumn({ name: "order_address_id" })
  order_address: OrderAddress;
}
