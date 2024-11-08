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
import { StoreAddressService } from "./store_address.service";
import { CreateStoreAddressDto } from "./dto/create-store_address.dto";
import { UpdateStoreAddressDto } from "./dto/update-store_address.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { StoreAddress } from "./entities/store_address.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("store-address")
export class StoreAddressController {
  constructor(private readonly storeAddressService: StoreAddressService) {}

  @ApiOperation({ summary: "StoreAddress yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created StoreAddress",
    type: StoreAddress,
  })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createStoreAddressDto: CreateStoreAddressDto) {
    return this.storeAddressService.create(createStoreAddressDto);
  }

  @ApiOperation({ summary: "Barcha StoreAddresslarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of StoreAddresss",
    type: [StoreAddress],
  })
  @Get("get")
  findAll() {
    return this.storeAddressService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha StoreAddresslarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get StoreAddress by ID",
    type: StoreAddress,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.storeAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha StoreAddresslarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update StoreAddress by ID",
    type: StoreAddress,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateStoreAddressDto: UpdateStoreAddressDto
  ) {
    return this.storeAddressService.update(+id, updateStoreAddressDto);
  }

  @ApiOperation({ summary: "ID bo'yicha StoreAddresslarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete StoreAddress by ID",
    type: StoreAddress,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.storeAddressService.remove(+id);
  }
}
