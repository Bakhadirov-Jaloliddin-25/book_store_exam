import { Module } from "@nestjs/common";
import { OrderAddressService } from "./order_address.service";
import { OrderAddressController } from "./order_address.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderAddress } from "./entities/order_address.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrderAddress])],
  controllers: [OrderAddressController],
  providers: [OrderAddressService],
})
export class OrderAddressModule {}
