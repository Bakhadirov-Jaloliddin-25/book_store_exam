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
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Payment } from "./entities/payment.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("payment")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({ summary: "Payment yaratish" })
  @ApiResponse({ status: 200, description: "Created Payment", type: Payment })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @ApiOperation({ summary: "Barcha Paymentlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Payments",
    type: [Payment],
  })
  @UseGuards(AdminGuard)
  @Get("get")
  findAll() {
    return this.paymentService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Paymentlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Payment by ID", type: Payment })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.paymentService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Paymentlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Payment by ID",
    type: Payment,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Paymentlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Payment by ID",
    type: Payment,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.paymentService.remove(+id);
  }
}
