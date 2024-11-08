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
import { BookStoreService } from "./book_store.service";
import { CreateBookStoreDto } from "./dto/create-book_store.dto";
import { UpdateBookStoreDto } from "./dto/update-book_store.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { BookStore } from "./entities/book_store.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("book-store")
export class BookStoreController {
  constructor(private readonly bookStoreService: BookStoreService) {}

  @ApiOperation({ summary: "BookStore yaratish" })
  @ApiResponse({
    status: 200,
    description: "Created BookStore",
    type: BookStore,
  })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createBookStoreDto: CreateBookStoreDto) {
    return this.bookStoreService.create(createBookStoreDto);
  }

  @ApiOperation({ summary: "Barcha BookStorelarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of BookStores",
    type: [BookStore],
  })
  @Get("get")
  findAll() {
    return this.bookStoreService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha BookStorelarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get BookStore by ID",
    type: BookStore,
  })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.bookStoreService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha BookStorelarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update BookStore by ID",
    type: BookStore,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateBookStoreDto: UpdateBookStoreDto
  ) {
    return this.bookStoreService.update(+id, updateBookStoreDto);
  }

  @ApiOperation({ summary: "ID bo'yicha BookStorelarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete BookStore by ID",
    type: BookStore,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.bookStoreService.remove(+id);
  }
}
