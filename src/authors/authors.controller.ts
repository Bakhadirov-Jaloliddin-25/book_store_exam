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
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";

@Controller("authors")
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @ApiOperation({ summary: "Author yaratish" })
  @ApiResponse({ status: 200, description: "Created Author", type: Author })
  @UseGuards(AdminGuard)
  @Post("create")
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @ApiOperation({ summary: "Barcha Authorlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of Authors", type: [Author] })
  @Get("get")
  findAll() {
    return this.authorsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha Authorlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get Author by ID", type: Author })
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.authorsService.findOne(+id);
  }

  @ApiOperation({ summary: "ID bo'yicha Authorlarni yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update Author by ID",
    type: Author,
  })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @ApiOperation({ summary: "ID bo'yicha Authorlarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete Author by ID",
    type: Author,
  })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.authorsService.remove(+id);
  }
}
