import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Review } from "./entities/review.entity";

@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation({ summary: "Review yaratish" })
  @ApiResponse({ status: 200, description: "Created Review", type: Review })
  // @UseGuards(AdminGuard)
  // @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @ApiOperation({ summary: "Barcha Reviewlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Reviews", type: [Review] })
  @Get("get")
  findAll() {
    return this.reviewsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Reviewlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Review by ID", type: Review })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.reviewsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Reviewlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Review by ID",
    type: Review,
  })
  // @UseGuards(AdminGuard)
  // @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Reviewlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Review by ID",
    type: Review,
  })
  // @UseGuards(AdminGuard)
  // @UseGuards(JwtAuthGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.reviewsService.remove(+id);
  }
}
