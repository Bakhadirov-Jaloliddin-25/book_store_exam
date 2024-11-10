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
exports.Region = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const order_address_entity_1 = require("../../order_address/entities/order_address.entity");
const store_address_entity_1 = require("../../store_address/entities/store_address.entity");
const district_entity_1 = require("../../district/entities/district.entity");
let Region = class Region {
};
exports.Region = Region;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Region unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Region.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Türkiye",
        description: "Region name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => district_entity_1.District, (district) => district.region),
    __metadata("design:type", Array)
], Region.prototype, "districts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_address_entity_1.OrderAddress, (order_address) => order_address.region),
    __metadata("design:type", Array)
], Region.prototype, "order_addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => store_address_entity_1.StoreAddress, (store_address) => store_address.region),
    __metadata("design:type", Array)
], Region.prototype, "store_addresses", void 0);
exports.Region = Region = __decorate([
    (0, typeorm_1.Entity)()
], Region);
//# sourceMappingURL=region.entity.js.map