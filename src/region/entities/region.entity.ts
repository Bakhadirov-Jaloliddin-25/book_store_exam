import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderAddress } from "../../order_address/entities/order_address.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";
import { District } from "../../district/entities/district.entity";

@Entity()
export class Region {
  @ApiProperty({
    example: 1,
    description: "Region unique ID (autoincrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Türkiye",
    description: "Region name",
  })
  @Column()
  name: string;

  @OneToMany(() => District, (district) => district.region)
  districts: District[];

  @OneToMany(() => OrderAddress, (order_address) => order_address.region)
  order_addresses: OrderAddress[];

  @OneToMany(() => StoreAddress, (store_address) => store_address.region)
  store_addresses: StoreAddress[];
}
