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
import { DistrictService } from "./district.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { District } from "./entities/district.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "District yaratish" })
  @ApiResponse({ status: 200, description: "Created District", type: District })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Barcha Districtlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Districts",
    type: [District],
  })
  @Get("get")
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Districtlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get District by ID",
    type: District,
  })
  @UseGuards(AdminGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Districtlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update District by ID",
    type: District,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Districtlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete District by ID",
    type: District,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
