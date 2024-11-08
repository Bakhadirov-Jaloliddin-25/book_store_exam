import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "../../books/entities/book.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";

@Entity()
export class BookStore {
  @ApiProperty({
    example: 1,
    description: "Bookstore unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Azon",
    description: "Bookstore name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Bookstore phone number",
  })
  @Column()
  phone_number: string;

  @ApiProperty({
    example: "https://www.azon.com",
    description: "Bookstore website URL",
  })
  @Column()
  description: string;

  @ApiProperty({
    example: 1,
    description: "Bookstore address ID",
  })
  @Column()
  address_id: number;

  @OneToMany(() => Book, (book) => book.book_store)
  books: Book[];

  @ManyToOne(() => StoreAddress, (storeAddress) => storeAddress.book_stores)
  @JoinColumn({ name: "address_id" })
  address: StoreAddress;
}
