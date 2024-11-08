import { Module } from "@nestjs/common";
import { CartItemsService } from "./cart_items.service";
import { CartItemsController } from "./cart_items.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartItem } from "./entities/cart_item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  controllers: [CartItemsController],
  providers: [CartItemsService],
})
export class CartItemsModule {}
