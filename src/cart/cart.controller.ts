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
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Cart yaratish" })
  @ApiResponse({ status: 200, description: "Created Cart", type: Cart })
  @Post("create")
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "Barcha Cartlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Carts", type: [Cart] })
  @Get("get")
  @UseGuards(AdminGuard)
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Cartlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Cart by ID", type: Cart })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Cartlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Cart by ID",
    type: Cart,
  })
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Cartlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Cart by ID",
    type: Cart,
  })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
