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
import { OrderAddressService } from "./order_address.service";
import { CreateOrderAddressDto } from "./dto/create-order_address.dto";
import { UpdateOrderAddressDto } from "./dto/update-order_address.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { OrderAddress } from "./entities/order_address.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("order-address")
export class OrderAddressController {
  constructor(private readonly orderAddressService: OrderAddressService) {}

  @ApiOperation({ summary: "OrderAddress yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created OrderAddress",
    type: OrderAddress,
  })
  @Post("create")
  create(@Body() createOrderAddressDto: CreateOrderAddressDto) {
    return this.orderAddressService.create(createOrderAddressDto);
  }

  @ApiOperation({ summary: "Barcha OrderAddresslarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of OrderAddresss",
    type: [OrderAddress],
  })
  @Get("get")
  findAll() {
    return this.orderAddressService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha OrderAddresslarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get OrderAddress by ID",
    type: OrderAddress,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.orderAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha OrderAddresslarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update OrderAddress by ID",
    type: OrderAddress,
  })
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateOrderAddressDto: UpdateOrderAddressDto
  ) {
    return this.orderAddressService.update(+id, updateOrderAddressDto);
  }

  @ApiOperation({ summary: "ID bo'yicha OrderAddresslarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete OrderAddress by ID",
    type: OrderAddress,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.orderAddressService.remove(+id);
  }
}
