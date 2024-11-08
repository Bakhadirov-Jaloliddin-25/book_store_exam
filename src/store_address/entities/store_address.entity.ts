import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookStore } from "../../book_store/entities/book_store.entity";
import { Region } from "../../region/entities/region.entity";
import { District } from "../../district/entities/district.entity";

@Entity()
export class StoreAddress {
  @ApiProperty({
    example: 1,
    description: "Store Address unique ID (autoincrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

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
    example: "longitude:0, latitude:0",
    description: "Location",
  })
  @Column()
  location: string;

  @ApiProperty({
    example: "Information",
    description: "Information",
  })
  @Column()
  info: string;

  @OneToMany(() => BookStore, (book_store) => book_store.address)
  book_stores: BookStore[];

  @ManyToOne(() => Region, (region) => region.store_addresses)
  @JoinColumn({ name: "region_id" })
  region: Region;

  @ManyToOne(() => District, (district) => district.store_addresses)
  @JoinColumn({ name: "district_id" })
  district: District;
}
