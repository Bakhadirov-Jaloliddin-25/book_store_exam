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
import { PublishersService } from "./publishers.service";
import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { Publisher } from "./entities/publisher.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("publishers")
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @ApiOperation({ summary: "Publisher yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created Publisher",
    type: Publisher,
  })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publishersService.create(createPublisherDto);
  }

  @ApiOperation({ summary: "Barcha Publisherlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of Publishers",
    type: [Publisher],
  })
  @Get("get")
  findAll() {
    return this.publishersService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Publisherlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Publisher by ID",
    type: Publisher,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.publishersService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Publisherlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Publisher by ID",
    type: Publisher,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updatePublisherDto: UpdatePublisherDto
  ) {
    return this.publishersService.update(+id, updatePublisherDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Publisherlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Publisher by ID",
    type: Publisher,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.publishersService.remove(+id);
  }
}
