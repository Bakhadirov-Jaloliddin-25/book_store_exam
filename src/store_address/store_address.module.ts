import { Module } from "@nestjs/common";
import { StoreAddressService } from "./store_address.service";
import { StoreAddressController } from "./store_address.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoreAddress } from "./entities/store_address.entity";

@Module({
  imports: [TypeOrmModule.forFeature([StoreAddress])],
  controllers: [StoreAddressController],
  providers: [StoreAddressService],
})
export class StoreAddressModule {}
