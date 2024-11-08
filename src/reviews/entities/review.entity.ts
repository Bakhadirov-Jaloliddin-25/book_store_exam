import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "../../customers/entities/customer.entity";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Review {
  @ApiProperty({
    example: 1,
    description: "Review unique ID (auto-increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: "Book ID",
  })
  @Column()
  book_id: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @Column()
  customer_id: number;

  @ApiProperty({
    example: "Nice Book",
    description: "Review",
  })
  @Column()
  review: string;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: "book_id" })
  book: Book;
}
