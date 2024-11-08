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
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Order } from "./entities/order.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: "Order yaratish" })
  @ApiResponse({ status: 200, description: "Created Order", type: Order })
  @Post("create")
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiOperation({ summary: "Barcha Orderlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Orders", type: [Order] })
  @UseGuards(AdminGuard)
  @Get("get")
  findAll() {
    return this.ordersService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Orderlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Order by ID", type: Order })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Orderlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Order by ID",
    type: Order,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Orderlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Order by ID",
    type: Order,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.ordersService.remove(+id);
  }
}
