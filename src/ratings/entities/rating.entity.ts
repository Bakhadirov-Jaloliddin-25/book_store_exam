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
export class Rating {
  @ApiProperty({
    example: 1,
    description: "Rating unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 5,
    description: "Rating value (1-5)",
  })
  @Column()
  rating: number;

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

  @ManyToOne(() => Customer, (customer) => customer.ratings)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.ratings)
  @JoinColumn({ name: "book_id" })
  book: Book;
}
