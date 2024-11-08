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
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Book } from "./entities/book.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: "Book yaratish" })
  @ApiResponse({ status: 200, description: "Created Book", type: Book })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @ApiOperation({ summary: "Barcha Booklarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Books", type: [Book] })
  @Get("get")
  findAll() {
    return this.booksService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Booklarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Book by ID", type: Book })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Booklarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Book by ID",
    type: Book,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Booklarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Book by ID",
    type: Book,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
