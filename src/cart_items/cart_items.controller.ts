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
import { CartItemsService } from "./cart_items.service";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { CartItem } from "./entities/cart_item.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("cart-items")
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @ApiOperation({ summary: "CartItem yaratish" })
  @ApiResponse({ status: 200, description: "Created CartItem", type: CartItem })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @ApiOperation({ summary: "Barcha CartItemlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of CartItems",
    type: [CartItem],
  })
  @UseGuards(AdminGuard)
  @Get("get")
  findAll() {
    return this.cartItemsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha CartItemlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get CartItem by ID",
    type: CartItem,
  })
  @UseGuards(AdminGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha CartItemlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update CartItem by ID",
    type: CartItem,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateCartItemDto: UpdateCartItemDto
  ) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @ApiOperation({ summary: "ID bo'yicha CartItemlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete CartItem by ID",
    type: CartItem,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.cartItemsService.remove(+id);
  }
}
