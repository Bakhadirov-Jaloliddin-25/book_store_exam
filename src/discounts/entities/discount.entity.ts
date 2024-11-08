import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Discount {
  @ApiProperty({
    example: 1,
    description: "Discount unique ID (autoincrement)",
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
    example: "2022-01-01",
    description: "Discount start date",
  })
  @Column()
  start_date: Date;

  @ApiProperty({
    example: "2022-12-31",
    description: "Discount end date",
  })
  @Column()
  end_date: Date;

  @ApiProperty({
    example: 5,
    description: "Discount percentage",
  })
  @Column()
  percent: number;

  @ManyToOne(() => Book, (book) => book.discounts)
  @JoinColumn({ name: "book_id" })
  book: Book;
}
