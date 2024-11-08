import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../orders/entities/order.entity";

@Entity()
export class Delivery {
  @ApiProperty({
    example: 1,
    description: "Delivery unique ID (auto-increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Vinicius",
    description: "Delivery name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "crybaby@gmail.com",
    description: "Delivery email",
  })
  @Column()
  email: string;

  @ApiProperty({
    example: "$Vinicius11$",
    description: "Delivery password",
  })
  @Column()
  password: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Delivery phone number",
  })
  @Column()
  phone_number: string;

  @ApiProperty({
    example: true,
    description: "Delivery status (active)",
  })
  @Column({ default: false })
  is_active: boolean;

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
    example: "https://example.com/activation/12345",
    description: "Delivery activation link",
  })
  @Column()
  activation_link?: string;

  @OneToMany(() => Order, (order) => order.delivery)
  orders: Order[];
}
