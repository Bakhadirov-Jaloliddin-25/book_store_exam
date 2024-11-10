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
exports.OrderAddress = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const region_entity_1 = require("../../region/entities/region.entity");
const district_entity_1 = require("../../district/entities/district.entity");
let OrderAddress = class OrderAddress {
};
exports.OrderAddress = OrderAddress;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Order Address unique ID (autoincrement)",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderAddress.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Customer ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderAddress.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Region ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderAddress.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "District ID",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderAddress.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "123 Main St",
        description: "Street address",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderAddress.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Apt 1B",
        description: "House number and apartment number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderAddress.prototype, "house", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "longitude:0, latitude:0",
        description: "Location",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderAddress.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "90000",
        description: "Post index",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderAddress.prototype, "post_index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Information",
        description: "Information",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderAddress.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.order_addresses),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.Customer)
], OrderAddress.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.order_address),
    __metadata("design:type", Array)
], OrderAddress.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region, (region) => region.order_addresses),
    (0, typeorm_1.JoinColumn)({ name: "region_id" }),
    __metadata("design:type", region_entity_1.Region)
], OrderAddress.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => district_entity_1.District, (district) => district.order_addresses),
    (0, typeorm_1.JoinColumn)({ name: "district_id" }),
    __metadata("design:type", district_entity_1.District)
], OrderAddress.prototype, "district", void 0);
exports.OrderAddress = OrderAddress = __decorate([
    (0, typeorm_1.Entity)()
], OrderAddress);
//# sourceMappingURL=order_address.entity.js.map