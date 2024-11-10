"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const admin_module_1 = require("./admin/admin.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const genres_module_1 = require("./genres/genres.module");
const publishers_module_1 = require("./publishers/publishers.module");
const authors_module_1 = require("./authors/authors.module");
const discounts_module_1 = require("./discounts/discounts.module");
const order_items_module_1 = require("./order_items/order_items.module");
const payment_method_module_1 = require("./payment_method/payment_method.module");
const payment_module_1 = require("./payment/payment.module");
const delivery_module_1 = require("./delivery/delivery.module");
const cart_module_1 = require("./cart/cart.module");
const cart_items_module_1 = require("./cart_items/cart_items.module");
const book_store_module_1 = require("./book_store/book_store.module");
const store_address_module_1 = require("./store_address/store_address.module");
const order_address_module_1 = require("./order_address/order_address.module");
const region_module_1 = require("./region/region.module");
const district_module_1 = require("./district/district.module");
const ratings_module_1 = require("./ratings/ratings.module");
const reviews_module_1 = require("./reviews/reviews.module");
const customers_module_1 = require("./customers/customers.module");
const books_module_1 = require("./books/books.module");
const orders_module_1 = require("./orders/orders.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
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
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            genres_module_1.GenresModule,
            publishers_module_1.PublishersModule,
            authors_module_1.AuthorsModule,
            discounts_module_1.DiscountsModule,
            order_items_module_1.OrderItemsModule,
            payment_method_module_1.PaymentMethodModule,
            payment_module_1.PaymentModule,
            delivery_module_1.DeliveryModule,
            cart_module_1.CartModule,
            cart_items_module_1.CartItemsModule,
            book_store_module_1.BookStoreModule,
            store_address_module_1.StoreAddressModule,
            order_address_module_1.OrderAddressModule,
            region_module_1.RegionModule,
            district_module_1.DistrictModule,
            ratings_module_1.RatingsModule,
            reviews_module_1.ReviewsModule,
            customers_module_1.CustomersModule,
            books_module_1.BooksModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map