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
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { OrderItemsService } from "./order_items.service";
import { CreateOrderItemDto } from "./dto/create-order_item.dto";
import { OrderItem } from "./entities/order_item.entity";
import { UpdateOrderItemDto } from "./dto/update-order_item.dto";
import { AdminGuard } from "../guards/admin.guard";

@Controller("order-items")
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @ApiOperation({ summary: "OrderItem yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created OrderItem",
    type: OrderItem,
  })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @ApiOperation({ summary: "Barcha OrderItemlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of OrderItems",
    type: [OrderItem],
  })
  @Get("get")
  findAll() {
    return this.orderItemsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha OrderItemlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get OrderItem by ID",
    type: OrderItem,
  })
  @UseGuards(AdminGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha OrderItemlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update OrderItem by ID",
    type: OrderItem,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @ApiOperation({ summary: "ID bo'yicha OrderItemlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete OrderItem by ID",
    type: OrderItem,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.orderItemsService.remove(+id);
  }
}
