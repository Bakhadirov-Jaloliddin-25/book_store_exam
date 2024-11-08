import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "../../customers/entities/customer.entity";
import { CartItem } from "../../cart_items/entities/cart_item.entity";

@Entity()
export class Cart {
  @ApiProperty({
    example: 1,
    description: "Cart unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @Column()
  customer_id: number;

  @ApiProperty({
    example: "open",
    description: "Cart status (open, closed, cancelled)",
  })
  @Column()
  status: string;

  @ApiProperty({
    example: "2024-11-01T12:00:00.000Z",
    description: "Cart creation date",
  })
  @Column()
  created_at: Date;

  @ManyToOne(() => Customer, (customer) => customer.carts)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @OneToMany(() => CartItem, (cart_item) => cart_item.cart)
  cart_items: CartItem[];
}
