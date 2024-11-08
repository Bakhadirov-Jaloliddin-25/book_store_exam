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
import { DiscountsService } from "./discounts.service";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { Discount } from "./entities/discount.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("discounts")
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {}

  @ApiOperation({ summary: "Discount yaratish" })
  @ApiResponse({ status: 200, description: "Created Discount", type: Discount })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountsService.create(createDiscountDto);
  }

  @ApiOperation({ summary: "Barcha Discountlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Discounts",
    type: [Discount],
  })
  @Get("get")
  findAll() {
    return this.discountsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Discountlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Discount by ID",
    type: Discount,
  })
  @UseGuards(AdminGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.discountsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Discountlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Discount by ID",
    type: Discount,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateDiscountDto: UpdateDiscountDto
  ) {
    return this.discountsService.update(+id, updateDiscountDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Discountlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Discount by ID",
    type: Discount,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.discountsService.remove(+id);
  }
}
