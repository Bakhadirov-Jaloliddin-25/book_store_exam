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
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Region } from "./entities/region.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Region yaratish" })
  @ApiResponse({ status: 200, description: "Created Region", type: Region })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha Regionlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Regions", type: [Region] })
  @Get("get")
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Regionlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Region by ID", type: Region })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Regionlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Region by ID",
    type: Region,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Regionlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Region by ID",
    type: Region,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}
