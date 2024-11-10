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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAddress = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const book_store_entity_1 = require("../../book_store/entities/book_store.entity");
const region_entity_1 = require("../../region/entities/region.entity");
const district_entity_1 = require("../../district/entities/district.entity");
let StoreAddress = class StoreAddress {
};
exports.StoreAddress = StoreAddress;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Store Address unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StoreAddress.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Region ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StoreAddress.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "District ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StoreAddress.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "123 Main St",
        description: "Street address",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StoreAddress.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "longitude:0, latitude:0",
        description: "Location",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StoreAddress.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Information",
        description: "Information",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StoreAddress.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_store_entity_1.BookStore, (book_store) => book_store.address),
    __metadata("design:type", Array)
], StoreAddress.prototype, "book_stores", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region, (region) => region.store_addresses),
    (0, typeorm_1.JoinColumn)({ name: "region_id" }),
    __metadata("design:type", region_entity_1.Region)
], StoreAddress.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => district_entity_1.District, (district) => district.store_addresses),
    (0, typeorm_1.JoinColumn)({ name: "district_id" }),
    __metadata("design:type", district_entity_1.District)
], StoreAddress.prototype, "district", void 0);
exports.StoreAddress = StoreAddress = __decorate([
    (0, typeorm_1.Entity)()
], StoreAddress);
//# sourceMappingURL=store_address.entity.js.map