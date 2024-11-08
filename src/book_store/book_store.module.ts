import { Module } from "@nestjs/common";
import { BookStoreService } from "./book_store.service";
import { BookStoreController } from "./book_store.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookStore } from "./entities/book_store.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BookStore])],
  controllers: [BookStoreController],
  providers: [BookStoreService],
})
export class BookStoreModule {}
