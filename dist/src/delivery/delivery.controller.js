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
exports.DeliveryController = void 0;
const common_1 = require("@nestjs/common");
const delivery_service_1 = require("./delivery.service");
const create_delivery_dto_1 = require("./dto/create-delivery.dto");
const update_delivery_dto_1 = require("./dto/update-delivery.dto");
const delivery_entity_1 = require("./entities/delivery.entity");
const swagger_1 = require("@nestjs/swagger");
let DeliveryController = class DeliveryController {
    constructor(deliveryService) {
        this.deliveryService = deliveryService;
    }
    create(createDeliveryDto) {
        return this.deliveryService.create(createDeliveryDto);
    }
    findAll() {
        return this.deliveryService.findAll();
    }
    findOne(id) {
        return this.deliveryService.findOne(+id);
    }
    update(id, updateDeliveryDto) {
        return this.deliveryService.update(+id, updateDeliveryDto);
    }
    remove(id) {
        return this.deliveryService.remove(+id);
    }
    async activateUser(link) {
        return this.deliveryService.activateDelivery(link);
    }
};
exports.DeliveryController = DeliveryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delivery yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Created Delivery", type: delivery_entity_1.Delivery }),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_dto_1.CreateDeliveryDto]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha Deliverylarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Deliverys",
        type: [delivery_entity_1.Delivery],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Deliverylarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get Delivery by ID",
        type: delivery_entity_1.Delivery,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Deliverylarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update Delivery by ID",
        type: delivery_entity_1.Delivery,
    }),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_delivery_dto_1.UpdateDeliveryDto]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha Deliverylarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete Delivery by ID",
        type: delivery_entity_1.Delivery,
    }),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Activation link" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Activation link",
        type: String,
    }),
    (0, common_1.Get)("activate/:link"),
    __param(0, (0, common_1.Param)("link")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "activateUser", null);
exports.DeliveryController = DeliveryController = __decorate([
    (0, common_1.Controller)("delivery"),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], DeliveryController);
//# sourceMappingURL=delivery.controller.js.map