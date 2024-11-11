import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admin } from "./entities/admin.entity";
import { CreatorGuard } from "../guards/creator.guard";
import { AdminSelfGuard } from "../guards/admin-self.guard";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@ApiTags("Admins")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Admin yaratish" })
  @ApiResponse({ status: 200, description: "Created Admin", type: Admin })
  @UseGuards(CreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Barcha adminlarni ko'rish" })
  @ApiResponse({ status: 200, description: "List of admins", type: [Admin] })
  @UseGuards(CreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Get("get")
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha adminlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get admin by ID", type: Admin })
  @UseGuards(AdminSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Email bo'yicha adminlarni ko'rish" })
  @ApiResponse({ status: 200, description: "Get admin by Email", type: Admin })
  @UseGuards(CreatorGuard)
  @UseGuards(JwtAuthGuard)
  @Get("get/email/:email")
  findAdminByEmail(@Param("email") email: string) {
    return this.adminService.findAdminByEmail(email);
  }

  @ApiOperation({ summary: "ID bo'yicha adminlarni yangilash" })
  @ApiResponse({ status: 200, description: "Update admin by ID", type: Admin })
  @UseGuards(AdminSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "ID bo'yicha adminlarni o'chirish" })
  @ApiResponse({ status: 200, description: "Delete admin by ID", type: Admin })
  @UseGuards(AdminSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
