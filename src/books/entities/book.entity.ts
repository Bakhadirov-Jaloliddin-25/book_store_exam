import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "../../authors/entities/author.entity";
import { Publisher } from "../../publishers/entities/publisher.entity";
import { Genre } from "../../genres/entities/genre.entity";
import { BookStore } from "../../book_store/entities/book_store.entity";
import { Discount } from "../../discounts/entities/discount.entity";
import { OrderItem } from "../../order_items/entities/order_item.entity";
import { CartItem } from "../../cart_items/entities/cart_item.entity";
import { Rating } from "../../ratings/entities/rating.entity";
import { Review } from "../../reviews/entities/review.entity";

@Entity()
export class Book {
  @ApiProperty({
    example: 1,
    description: "Book unique ID (auto-increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Iskanja",
    description: "Book name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "The Great Gatsby",
    description: "Book title",
  })
  @Column()
  description: string;

  @ApiProperty({
    example: 120,
    description: "Price",
  })
  @Column()
  price: number;

  @ApiProperty({
    example: 1,
    description: "Author ID",
  })
  @Column()
  author_id: number;

  @ApiProperty({
    example: 1,
    description: "Genre ID",
  })
  @Column()
  genre_id: number;

  @ApiProperty({
    example: 1,
    description: "Publisher ID",
  })
  @Column()
  publisher_id: number;

  @ApiProperty({
    example: 250,
    description: "Number of pages",
  })
  @Column()
  num_of_pages: number;

  @ApiProperty({
    example: 2022,
    description: "Publication year",
  })
  @Column()
  year_of_publication: Date;

  @ApiProperty({
    example: 250,
    description: "Book stock",
  })
  @Column()
  stock: number;

  @ApiProperty({
    example: 1,
    description: "Book store ID",
  })
  @Column()
  book_store_id: number;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: "author_id" })
  author: Author;

  @ManyToOne(() => Genre, (genre) => genre.books)
  @JoinColumn({ name: "genre_id" })
  genre: Genre;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  @JoinColumn({ name: "publisher_id" })
  publisher: Publisher;

  @ManyToOne(() => BookStore, (book_store) => book_store.books)
  @JoinColumn({ name: "book_store_id" })
  book_store: BookStore;

  @OneToMany(() => Discount, (discount) => discount.book)
  discounts: Discount[];

  @OneToMany(() => OrderItem, (order_item) => order_item.book)
  order_items: OrderItem[];

  @OneToMany(() => CartItem, (cart_item) => cart_item.book)
  cart_items: CartItem[];

  @OneToMany(() => Rating, (rating) => rating.book)
  ratings: Rating[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];
}
