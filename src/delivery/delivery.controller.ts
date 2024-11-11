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
import { DeliveryService } from "./delivery.service";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { Delivery } from "./entities/delivery.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { SelfGuard } from "../guards/self.guard";

@Controller("delivery")
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @ApiOperation({ summary: "Delivery yaratish" })
  @ApiResponse({ status: 200, description: "Created Delivery", type: Delivery })
  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @ApiOperation({ summary: "Barcha Deliverylarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Deliverys",
    type: [Delivery],
  })
  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get("get")
  findAll() {
    return this.deliveryService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Deliverylarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Delivery by ID",
    type: Delivery,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.deliveryService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Deliverylarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Delivery by ID",
    type: Delivery,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto
  ) {
    return this.deliveryService.update(+id, updateDeliveryDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Deliverylarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Delivery by ID",
    type: Delivery,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.deliveryService.remove(+id);
  }

  @ApiOperation({ summary: "Activation link" })
  @ApiResponse({
    status: 200,
    description: "Activation link",
    type: String,
  })
  @Get("activate/:link")
  async activateUser(@Param("link") link: string) {
    return this.deliveryService.activateDelivery(link);
  }
}
