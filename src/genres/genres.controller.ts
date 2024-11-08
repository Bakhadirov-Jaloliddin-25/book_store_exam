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
import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Genre } from "./entities/genre.entity";
import { AdminGuard } from "../guards/admin.guard";

@Controller("genres")
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @ApiOperation({ summary: "Genre yaratish" })
  @ApiResponse({ status: 200, description: "Created Genre", type: Genre })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @ApiOperation({ summary: "Barcha Genrelarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Genres", type: [Genre] })
  @Get("get")
  findAll() {
    return this.genresService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Genrelarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Genre by ID", type: Genre })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.genresService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Genrelarni yangilash" })
  @ApiResponse({ status: 200, description: "Update Genre by ID", type: Genre })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(+id, updateGenreDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Genrelarni o'chirish" })
  @ApiResponse({ status: 200, description: "Delete Genre by ID", type: Genre })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.genresService.remove(+id);
  }
}
