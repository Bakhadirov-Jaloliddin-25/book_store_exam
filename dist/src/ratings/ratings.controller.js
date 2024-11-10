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
exports.RatingsController = void 0;
const common_1 = require("@nestjs/common");
const ratings_service_1 = require("./ratings.service");
const create_rating_dto_1 = require("./dto/create-rating.dto");
const update_rating_dto_1 = require("./dto/update-rating.dto");
const swagger_1 = require("@nestjs/swagger");
const rating_entity_1 = require("./entities/rating.entity");
let RatingsController = class RatingsController {
    constructor(ratingsService) {
        this.ratingsService = ratingsService;
    }
    create(createRatingDto) {
        return this.ratingsService.create(createRatingDto);
    }
    findAll() {
        return this.ratingsService.findAll();
    }
    findOne(id) {
        return this.ratingsService.findOne(+id);
    }
    update(id, updateRatingDto) {
        return this.ratingsService.update(+id, updateRatingDto);
    }
    remove(id) {
        return this.ratingsService.remove(+id);
    }
};
exports.RatingsController = RatingsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Rating yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Rating", type: rating_entity_1.Rating }),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rating_dto_1.CreateRatingDto]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Ratinglarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of Ratings", type: [rating_entity_1.Rating] }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Ratinglarni ko'rish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get Rating by ID", type: rating_entity_1.Rating }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Ratinglarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update Rating by ID",
        type: rating_entity_1.Rating,
    }),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rating_dto_1.UpdateRatingDto]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Ratinglarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete Rating by ID",
        type: rating_entity_1.Rating,
    }),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "remove", null);
exports.RatingsController = RatingsController = __decorate([
    (0, common_1.Controller)("ratings"),
    __metadata("design:paramtypes", [ratings_service_1.RatingsService])
], RatingsController);
//# sourceMappingURL=ratings.controller.js.map