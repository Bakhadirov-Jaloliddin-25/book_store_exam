import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { MailModule } from "../mail/mail.module";
import { CustomersModule } from "../customers/customers.module";
import { DeliveryModule } from "../delivery/delivery.module";

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      global: true,
    }),
    MailModule,
    CustomersModule,
    DeliveryModule,
  ],
  exports: [JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
