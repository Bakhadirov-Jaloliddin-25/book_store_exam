import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Region } from "../../region/entities/region.entity";
import { OrderAddress } from "../../order_address/entities/order_address.entity";
import { StoreAddress } from "../../store_address/entities/store_address.entity";

@Entity()
export class District {
  @ApiProperty({
    example: 1,
    description: "District unique ID (autoincrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Küçükçekmece",
    description: "District name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 1,
    description: "Region ID",
  })
  @Column()
  region_id: number;

  @ManyToOne(() => Region, (region) => region.districts)
  @JoinColumn({ name: "region_id" })
  region: Region;

  @OneToMany(() => OrderAddress, (order_address) => order_address.district)
  order_addresses: OrderAddress[];

  @OneToMany(() => StoreAddress, (store_address) => store_address.district)
  store_addresses: StoreAddress[];
}
