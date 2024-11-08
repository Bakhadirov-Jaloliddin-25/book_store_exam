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
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Customer } from "./entities/customer.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("customers")
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({ summary: "Customer yaratish" })
  @ApiResponse({ status: 200, description: "Created Customer", type: Customer })
  @Post("create")
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "Barcha Customerlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Customers",
    type: [Customer],
  })
  @UseGuards(AdminGuard)
  @Get("get")
  findAll() {
    return this.customersService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Customerlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Customer by ID",
    type: Customer,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.customersService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Customerlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Customer by ID",
    type: Customer,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Customerlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Customer by ID",
    type: Customer,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.customersService.remove(+id);
  }

  @Get("activate/:link")
  async activateUser(@Param("link") link: string) {
    return this.customersService.activateCustomer(link);
  }
}
