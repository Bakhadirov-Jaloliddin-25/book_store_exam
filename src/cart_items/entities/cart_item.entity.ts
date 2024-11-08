import { ApiProperty } from "@nestjs/swagger";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "../../cart/entities/cart.entity";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class CartItem {
  @ApiProperty({
    example: 1,
    description: "Cart item unique ID (autoincrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: "Cart ID",
  })
  cart_id: number;

  @ApiProperty({
    example: 1,
    description: "Book ID",
  })
  book_id: number;

  @ApiProperty({
    example: 5,
    description: "Quantity of books in the cart",
  })
  quantity: number;

  @ManyToOne(() => Cart, (cart) => cart.cart_items)
  @JoinColumn({ name: "cart_id" })
  cart: Cart;

  @ManyToOne(() => Book, (book) => book.cart_items)
  @JoinColumn({ name: "book_id" })
  book: Book;
}
