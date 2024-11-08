import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RatingsService } from "./ratings.service";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Rating } from "./entities/rating.entity";

@Controller("ratings")
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @ApiOperation({ summary: "Rating yaratish" })
  @ApiResponse({ status: 200, description: "Created Rating", type: Rating })
  @Post("create")
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @ApiOperation({ summary: "Barcha Ratinglarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Ratings", type: [Rating] })
  @Get("get")
  findAll() {
    return this.ratingsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Ratinglarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Rating by ID", type: Rating })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.ratingsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Ratinglarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Rating by ID",
    type: Rating,
  })
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingsService.update(+id, updateRatingDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Ratinglarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Rating by ID",
    type: Rating,
  })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.ratingsService.remove(+id);
  }
}
