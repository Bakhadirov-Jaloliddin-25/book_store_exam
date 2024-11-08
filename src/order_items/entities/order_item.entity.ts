import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "../../books/entities/book.entity";
import { Order } from "../../orders/entities/order.entity";

@Entity()
export class OrderItem {
  @ApiProperty({
    example: 1,
    description: "Order Item unique ID (autoincrement)",
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
    example: 1,
    description: "Book ID",
  })
  @Column()
  book_id: number;

  @ApiProperty({
    example: 10,
    description: "Quantity of books ordered",
  })
  @Column()
  quantity: number;

  @ManyToOne(() => Book, (book) => book.order_items)
  @JoinColumn({ name: "book_id" })
  book: Book;

  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: "order_id" })
  order: Order;
}
