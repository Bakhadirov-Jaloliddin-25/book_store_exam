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
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const genres_service_1 = require("./genres.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const update_genre_dto_1 = require("./dto/update-genre.dto");
const swagger_1 = require("@nestjs/swagger");
const genre_entity_1 = require("./entities/genre.entity");
const admin_guard_1 = require("../guards/admin.guard");
let GenresController = class GenresController {
    constructor(genresService) {
        this.genresService = genresService;
    }
    create(createGenreDto) {
        return this.genresService.create(createGenreDto);
    }
    findAll() {
        return this.genresService.findAll();
    }
    findOne(id) {
        return this.genresService.findOne(+id);
    }
    update(id, updateGenreDto) {
        return this.genresService.update(+id, updateGenreDto);
    }
    remove(id) {
        return this.genresService.remove(+id);
    }
};
exports.GenresController = GenresController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Genre yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Genre", type: genre_entity_1.Genre }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Genrelarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of Genres", type: [genre_entity_1.Genre] }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Genrelarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get Genre by ID", type: genre_entity_1.Genre }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Genrelarni yangilash" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Update Genre by ID", type: genre_entity_1.Genre }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_genre_dto_1.UpdateGenreDto]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Genrelarni o'chirish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Delete Genre by ID", type: genre_entity_1.Genre }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "remove", null);
exports.GenresController = GenresController = __decorate([
    (0, common_1.Controller)("genres"),
    __metadata("design:paramtypes", [genres_service_1.GenresService])
], GenresController);
//# sourceMappingURL=genres.controller.js.map