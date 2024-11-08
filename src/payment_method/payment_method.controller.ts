import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./entities/payment_method.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: "PaymentMethod yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created PaymentMethod",
    type: PaymentMethod,
  })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({ summary: "Barcha PaymentMethodlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of PaymentMethods",
    type: [PaymentMethod],
  })
  @Get("get")
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha PaymentMethodlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get PaymentMethod by ID",
    type: PaymentMethod,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha PaymentMethodlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update PaymentMethod by ID",
    type: PaymentMethod,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({ summary: "ID bo'yicha PaymentMethodlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete PaymentMethod by ID",
    type: PaymentMethod,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
