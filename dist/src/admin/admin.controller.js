"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_entity_1 = require("./entities/admin.entity");
const creator_guard_1 = require("../guards/creator.guard");
const admin_self_guard_1 = require("../guards/admin-self.guard");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    create(createAdminDto) {
        return this.adminService.create(createAdminDto);
    }
    findAll() {
        return this.adminService.findAll();
    }
    findOne(id) {
        return this.adminService.findOne(+id);
    }
    findAdminByEmail(email) {
        return this.adminService.findAdminByEmail(email);
    }
    update(id, updateAdminDto) {
        return this.adminService.update(+id, updateAdminDto);
    }
    remove(id) {
        return this.adminService.remove(+id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Admin", type: admin_entity_1.Admin }),
    (0, common_1.UseGuards)(creator_guard_1.CreatorGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha adminlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of admins", type: [admin_entity_1.Admin] }),
    (0, common_1.UseGuards)(creator_guard_1.CreatorGuard),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha adminlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get admin by ID", type: admin_entity_1.Admin }),
    (0, common_1.UseGuards)(admin_self_guard_1.AdminSelfGuard),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Email bo'yicha adminlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get admin by Email", type: admin_entity_1.Admin }),
    (0, common_1.UseGuards)(creator_guard_1.CreatorGuard),
    (0, common_1.Get)("get/email/:email"),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAdminByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha adminlarni yangilash" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Update admin by ID", type: admin_entity_1.Admin }),
    (0, common_1.UseGuards)(admin_self_guard_1.AdminSelfGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha adminlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Delete admin by ID", type: admin_entity_1.Admin }),
    (0, common_1.UseGuards)(admin_self_guard_1.AdminSelfGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)("Admins"),
    (0, common_1.Controller)("admin"),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map