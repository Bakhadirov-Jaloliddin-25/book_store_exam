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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const create_admin_dto_1 = require("../admin/dto/create-admin.dto");
const signindto_1 = require("./dto/signindto");
const creator_guard_1 = require("../guards/creator.guard");
const cookie_getter_decorator_1 = require("../decorators/cookie_getter.decorator");
const create_customer_dto_1 = require("../customers/dto/create-customer.dto");
const create_delivery_dto_1 = require("../delivery/dto/create-delivery.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async add(createAdminDto, res) {
        return this.authService.AddAdmin(createAdminDto, res);
    }
    async signIn(signInDto, res) {
        return this.authService.signInAdmin(signInDto, res);
    }
    async signOut(refreshToken, res) {
        return this.authService.signOutAdmin(refreshToken, res);
    }
    async refreshTokenAdmin(res, refresh_token) {
        return this.authService.refreshTokensAdmin(refresh_token, res);
    }
    async signUpCustomer(createCustomerDto, res) {
        return this.authService.signUpCustomer(createCustomerDto, res);
    }
    async signInCustomer(signInDto, res) {
        return this.authService.signInCustomer(signInDto, res);
    }
    async signOutCustomer(refreshToken, res) {
        return this.authService.signOutCustomer(refreshToken, res);
    }
    async refreshTokenCustomer(res, refresh_token) {
        return this.authService.refreshTokensCustomer(refresh_token, res);
    }
    async signUpDelivery(createDeliveryDto, res) {
        return this.authService.signUpDelivery(createDeliveryDto, res);
    }
    async signInDelivery(signInDto, res) {
        return this.authService.signInDelivery(signInDto, res);
    }
    async signOutDelivery(refreshToken, res) {
        return this.authService.signOutDelivery(refreshToken, res);
    }
    async refreshTokenDelivery(res, refresh_token) {
        return this.authService.refreshTokensDelivery(refresh_token, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi Admin qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Admin muvaffaqiyatli qo'shildi",
        schema: {
            example: {
                message: "Admin muvaffaqiyatli ro'yxatdan o'tdi!",
                admin: {
                    id: 1,
                    email: "admin",
                    is_active: true,
                    is_creator: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.UseGuards)(creator_guard_1.CreatorGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)("add-admin"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "add", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Adminni tizimga kiritish (signIn)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tizimga kirish muvaffaqiyatli",
        schema: {
            example: {
                message: "Tizimga muvaffaqiyatli kirildi",
                admin: {
                    id: 1,
                    email: "admin@gmail.com",
                    is_active: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-in"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signindto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Adminni tizimdan chiqarish (signOut)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Admin tizimdan muvaffaqiyatli chiqarildi",
        schema: {
            example: {
                message: "Tizimdan muvaffaqiyatli chiqildi",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-out"),
    __param(0, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi access token olish (refreshToken)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Yangi access token berildi",
        schema: {
            example: {
                access_token: "yangi_access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("refreshtoken-admin"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokenAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi Customer qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Customer muvaffaqiyatli qo'shildi",
        schema: {
            example: {
                message: "Customer muvaffaqiyatli ro'yxatdan o'tdi!",
                admin: {
                    id: 1,
                    email: "customer",
                    is_active: true,
                    is_creator: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)("sign-up-customer"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpCustomer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Customerni tizimga kiritish (signIn)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tizimga kirish muvaffaqiyatli",
        schema: {
            example: {
                message: "Tizimga muvaffaqiyatli kirildi",
                admin: {
                    id: 1,
                    email: "customer@gmail.com",
                    is_active: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-in-customer"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signindto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInCustomer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Customeri tizimdan chiqarish (signOut)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Customer tizimdan muvaffaqiyatli chiqarildi",
        schema: {
            example: {
                message: "Tizimdan muvaffaqiyatli chiqildi",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-out-customer"),
    __param(0, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOutCustomer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi access token olish (refreshToken)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Yangi access token berildi",
        schema: {
            example: {
                access_token: "yangi_access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("refreshtoken-customer"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokenCustomer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi Delivery qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Delivery muvaffaqiyatli qo'shildi",
        schema: {
            example: {
                message: "Delivery muvaffaqiyatli ro'yxatdan o'tdi!",
                admin: {
                    id: 1,
                    email: "delivery@gmail.com",
                    is_active: true,
                    is_creator: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)("sign-up-delivery"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_dto_1.CreateDeliveryDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpDelivery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Deliveryni tizimga kiritish (signIn)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Tizimga kirish muvaffaqiyatli",
        schema: {
            example: {
                message: "Tizimga muvaffaqiyatli kirildi",
                admin: {
                    id: 1,
                    email: "delivery@gmail.com",
                    is_active: true,
                },
                access_token: "access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-in-delivery"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signindto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInDelivery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Deliveryni tizimdan chiqarish (signOut)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Delivery tizimdan muvaffaqiyatli chiqarildi",
        schema: {
            example: {
                message: "Tizimdan muvaffaqiyatli chiqildi",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("sign-out-delivery"),
    __param(0, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOutDelivery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi access token olish (refreshToken)" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Yangi access token berildi",
        schema: {
            example: {
                access_token: "yangi_access_token",
            },
        },
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("refreshtoken-delivery"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, cookie_getter_decorator_1.CookieGetter)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokenDelivery", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Authorization (Ro'yhatdan o'tish)"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map