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
exports.PaymentMethodController = void 0;
const common_1 = require("@nestjs/common");
const payment_method_service_1 = require("./payment_method.service");
const create_payment_method_dto_1 = require("./dto/create-payment_method.dto");
const update_payment_method_dto_1 = require("./dto/update-payment_method.dto");
const payment_method_entity_1 = require("./entities/payment_method.entity");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let PaymentMethodController = class PaymentMethodController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    create(createPaymentMethodDto) {
        return this.paymentMethodService.create(createPaymentMethodDto);
    }
    findAll() {
        return this.paymentMethodService.findAll();
    }
    findOne(id) {
        return this.paymentMethodService.findOne(+id);
    }
    update(id, updatePaymentMethodDto) {
        return this.paymentMethodService.update(+id, updatePaymentMethodDto);
    }
    remove(id) {
        return this.paymentMethodService.remove(+id);
    }
};
exports.PaymentMethodController = PaymentMethodController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "PaymentMethod yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Created PaymentMethod",
        type: payment_method_entity_1.PaymentMethod,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_method_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha PaymentMethodlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of PaymentMethods",
        type: [payment_method_entity_1.PaymentMethod],
    }),
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha PaymentMethodlarni ko'rish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get PaymentMethod by ID",
        type: payment_method_entity_1.PaymentMethod,
    }),
    (0, common_1.Get)("get/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha PaymentMethodlarni yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Update PaymentMethod by ID",
        type: payment_method_entity_1.PaymentMethod,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_method_dto_1.UpdatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ID bo'yicha PaymentMethodlarni o'chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delete PaymentMethod by ID",
        type: payment_method_entity_1.PaymentMethod,
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "remove", null);
exports.PaymentMethodController = PaymentMethodController = __decorate([
    (0, common_1.Controller)("payment-method"),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService])
], PaymentMethodController);
//# sourceMappingURL=payment_method.controller.js.map