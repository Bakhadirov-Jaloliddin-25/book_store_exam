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
exports.PublishersController = void 0;
const common_1 = require("@nestjs/common");
const publishers_service_1 = require("./publishers.service");
const create_publisher_dto_1 = require("./dto/create-publisher.dto");
const update_publisher_dto_1 = require("./dto/update-publisher.dto");
const publisher_entity_1 = require("./entities/publisher.entity");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let PublishersController = class PublishersController {
    constructor(publishersService) {
        this.publishersService = publishersService;
    }
    create(createPublisherDto) {
        return this.publishersService.create(createPublisherDto);
    }
    findAll() {
        return this.publishersService.findAll();
    }
    findOne(id) {
        return this.publishersService.findOne(+id);
    }
    update(id, updatePublisherDto) {
        return this.publishersService.update(+id, updatePublisherDto);
    }
    remove(id) {
        return this.publishersService.remove(+id);
    }
};
exports.PublishersController = PublishersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Publisher yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created Publisher",
        type: publisher_entity_1.Publisher,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publisher_dto_1.CreatePublisherDto]),
    __metadata("design:returntype", void 0)
], PublishersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Publisherlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Publishers",
        type: [publisher_entity_1.Publisher],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublishersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Publisherlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get Publisher by ID",
        type: publisher_entity_1.Publisher,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublishersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Publisherlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update Publisher by ID",
        type: publisher_entity_1.Publisher,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_publisher_dto_1.UpdatePublisherDto]),
    __metadata("design:returntype", void 0)
], PublishersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Publisherlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete Publisher by ID",
        type: publisher_entity_1.Publisher,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublishersController.prototype, "remove", null);
exports.PublishersController = PublishersController = __decorate([
    (0, common_1.Controller)("publishers"),
    __metadata("design:paramtypes", [publishers_service_1.PublishersService])
], PublishersController);
//# sourceMappingURL=publishers.controller.js.map