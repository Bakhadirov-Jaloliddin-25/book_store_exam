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
import { Order } from "../../orders/entities/order.entity";
import { Region } from "../../region/entities/region.entity";
import { District } from "../../district/entities/district.entity";

@Entity()
export class OrderAddress {
  @ApiProperty({
    example: 1,
    description: "Order Address unique ID (autoincrement)",
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
    example: 1,
    description: "Region ID",
  })
  @Column()
  region_id: number;

  @ApiProperty({
    example: 1,
    description: "District ID",
  })
  @Column()
  district_id: number;

  @ApiProperty({
    example: "123 Main St",
    description: "Street address",
  })
  @Column()
  street: string;

  @ApiProperty({
    example: "Apt 1B",
    description: "House number and apartment number",
  })
  @Column()
  house: string;

  @ApiProperty({
    example: "longitude:0, latitude:0",
    description: "Location",
  })
  @Column()
  location: string;

  @ApiProperty({
    example: "90000",
    description: "Post index",
  })
  @Column()
  post_index: string;

  @ApiProperty({
    example: "Information",
    description: "Information",
  })
  @Column()
  info: string;

  @ManyToOne(() => Customer, (customer) => customer.order_addresses)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @OneToMany(() => Order, (order) => order.order_address)
  orders: Order[];

  @ManyToOne(() => Region, (region) => region.order_addresses)
  @JoinColumn({ name: "region_id" })
  region: Region;

  @ManyToOne(() => District, (district) => district.order_addresses)
  @JoinColumn({ name: "district_id" })
  district: District;
}
