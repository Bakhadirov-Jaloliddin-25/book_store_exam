import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "../../cart/entities/cart.entity";
import { Rating } from "../../ratings/entities/rating.entity";
import { Review } from "../../reviews/entities/review.entity";
import { Order } from "../../orders/entities/order.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";

@Entity()
export class Customer {
  @ApiProperty({
    example: 1,
    description: "Customer unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Cristiano",
    description: "First Name",
  })
  @Column()
  first_name: string;

  @ApiProperty({
    example: "Ronaldo",
    description: "Last Name",
  })
  last_name: string;

  @ApiProperty({
    example: "cr7ronaldo@gmail.com",
    description: "Email",
  })
  @Column()
  email: string;

  @ApiProperty({
    example: "CR7ronaldo",
    description: "Password",
  })
  @Column()
  password: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Phone Number",
  })
  @Column()
  phone: string;

  @ApiProperty({
    example: true,
    description: "Customer status (active)",
  })
  @Column({ default: false })
  is_active: boolean;

  @ApiProperty({
    example: "2022-01-01",
    description: "Created At",
  })
  @Column({ default: new Date() })
  created_at: Date;

  @ApiProperty({
    example: "qwerty12345$",
    description: "Customer password",
  })
  @Column({ nullable: true })
  hashed_password?: string;

  @ApiProperty({
    example: "Customer refresh token",
    description: "Customer refresh token",
  })
  @Column({ nullable: true })
  hashed_refresh_token?: string;

  @ApiProperty({
    example: "https://example.com/verify/customer/12345",
    description: "Customer activation link",
  })
  @Column({ default: null })
  activation_link: string;

  @OneToMany(() => Cart, (cart) => cart.customer)
  carts: Cart[];

  @OneToMany(() => Rating, (rating) => rating.customer)
  ratings: Rating[];

  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToMany(() => OrderAddress, (order_address) => order_address.customer)
  order_addresses: OrderAddress[];
}
