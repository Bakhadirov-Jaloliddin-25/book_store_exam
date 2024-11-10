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
exports.BookStoreController = void 0;
const common_1 = require("@nestjs/common");
const book_store_service_1 = require("./book_store.service");
const create_book_store_dto_1 = require("./dto/create-book_store.dto");
const update_book_store_dto_1 = require("./dto/update-book_store.dto");
const swagger_1 = require("@nestjs/swagger");
const book_store_entity_1 = require("./entities/book_store.entity");
const admin_guard_1 = require("../guards/admin.guard");
let BookStoreController = class BookStoreController {
    constructor(bookStoreService) {
        this.bookStoreService = bookStoreService;
    }
    create(createBookStoreDto) {
        return this.bookStoreService.create(createBookStoreDto);
    }
    findAll() {
        return this.bookStoreService.findAll();
    }
    findOne(id) {
        return this.bookStoreService.findOne(+id);
    }
    update(id, updateBookStoreDto) {
        return this.bookStoreService.update(+id, updateBookStoreDto);
    }
    remove(id) {
        return this.bookStoreService.remove(+id);
    }
};
exports.BookStoreController = BookStoreController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "BookStore yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created BookStore",
        type: book_store_entity_1.BookStore,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_store_dto_1.CreateBookStoreDto]),
    __metadata("design:returntype", void 0)
], BookStoreController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha BookStorelarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of BookStores",
        type: [book_store_entity_1.BookStore],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookStoreController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha BookStorelarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get BookStore by ID",
        type: book_store_entity_1.BookStore,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookStoreController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha BookStorelarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update BookStore by ID",
        type: book_store_entity_1.BookStore,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_store_dto_1.UpdateBookStoreDto]),
    __metadata("design:returntype", void 0)
], BookStoreController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha BookStorelarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete BookStore by ID",
        type: book_store_entity_1.BookStore,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookStoreController.prototype, "remove", null);
exports.BookStoreController = BookStoreController = __decorate([
    (0, common_1.Controller)("book-store"),
    __metadata("design:paramtypes", [book_store_service_1.BookStoreService])
], BookStoreController);
//# sourceMappingURL=book_store.controller.js.map