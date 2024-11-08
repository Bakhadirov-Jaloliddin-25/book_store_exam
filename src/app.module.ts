import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "./admin/admin.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { GenresModule } from './genres/genres.module';
import { PublishersModule } from './publishers/publishers.module';
import { AuthorsModule } from './authors/authors.module';
import { DiscountsModule } from './discounts/discounts.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentModule } from './payment/payment.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CartModule } from './cart/cart.module';
import { CartItemsModule } from './cart_items/cart_items.module';
import { BookStoreModule } from './book_store/book_store.module';
import { StoreAddressModule } from './store_address/store_address.module';
import { OrderAddressModule } from './order_address/order_address.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { RatingsModule } from './ratings/ratings.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CustomersModule } from './customers/customers.module';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    AdminModule,
    AuthModule,
    GenresModule,
    PublishersModule,
    AuthorsModule,
    DiscountsModule,
    OrderItemsModule,
    PaymentMethodModule,
    PaymentModule,
    DeliveryModule,
    CartModule,
    CartItemsModule,
    BookStoreModule,
    StoreAddressModule,
    OrderAddressModule,
    RegionModule,
    DistrictModule,
    RatingsModule,
    ReviewsModule,
    CustomersModule,
    BooksModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
