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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mail_service_1 = require("../mail/mail.service");
const customers_service_1 = require("../customers/customers.service");
const delivery_service_1 = require("../delivery/delivery.service");
let AuthService = class AuthService {
    constructor(jwtService, adminService, customerService, deliveryService, mailService) {
        this.jwtService = jwtService;
        this.adminService = adminService;
        this.customerService = customerService;
        this.deliveryService = deliveryService;
        this.mailService = mailService;
    }
    async setRefreshTokenCookie(res, refreshToken) {
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: Number(process.env.REFRESH_TIME_MS),
        });
    }
    async generateTokensWithAdmin(admin) {
        const payload = {
            id: admin.id,
            email: admin.email,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
            is_admin: true,
        };
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token, refresh_token };
    }
    async AddAdmin(createAdminDto, res) {
        const existingAdmin = await this.adminService.findAdminByEmail(createAdminDto.email);
        if (existingAdmin) {
            throw new common_1.BadRequestException("Bunday admin mavjud!");
        }
        if (createAdminDto.password !== createAdminDto.confirm_password) {
            throw new common_1.BadRequestException("Parollar mos emas");
        }
        const hashed_password = await bcrypt.hash(createAdminDto.password, 10);
        const newAdmin = await this.adminService.create({
            ...createAdminDto,
            hashed_password,
        });
        const tokens = await this.generateTokensWithAdmin(newAdmin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 10);
        const activation_link = uuid.v4();
        const updatedAdmin = await this.adminService.update(newAdmin.id, {
            hashed_refresh_token,
            activation_link,
        });
        res.cookie("refresh_token", tokens.refresh_token, {
            httpOnly: true,
            maxAge: +process.env.REFRESH_TIME_MS,
        });
        return {
            message: "Admin muvaffaqiyatli qo'shildi!",
            admin: updatedAdmin,
            access_token: tokens.access_token,
        };
    }
    async signInAdmin(signInAdminDto, res) {
        const admin = await this.adminService.findAdminByEmail(signInAdminDto.email);
        if (!admin) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        const isPasswordValid = await bcrypt.compare(signInAdminDto.password, admin.hashed_password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        if (!admin.is_active) {
            throw new common_1.BadRequestException("Akkaunt hali faollashtirilmagan");
        }
        const tokens = await this.generateTokensWithAdmin(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 4);
        await this.adminService.update(admin.id, { hashed_refresh_token });
        await this.setRefreshTokenCookie(res, tokens.refresh_token);
        return {
            message: "Tizimga muvaffaqiyatli kirildi",
            admin,
            tokens,
        };
    }
    async signOutAdmin(refreshToken, res) {
        const payload = await this.jwtService.verifyAsync(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        const admin = await this.adminService.findOne(payload.id);
        if (!admin) {
            throw new common_1.BadRequestException("admin not found");
        }
        await this.adminService.update(admin.id, { hashed_refresh_token: null });
        res.clearCookie("refresh_token");
        return {
            message: "admin successfully logouted",
        };
    }
    async refreshTokensAdmin(refresh_token, res) {
        try {
            const payload = await this.jwtService.verifyAsync(refresh_token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            const admin = await this.adminService.findOne(payload.id);
            if (!admin) {
                throw new common_1.UnauthorizedException("Admin not found");
            }
            const valid_refresh_token = await bcrypt.compare(refresh_token, admin.hashed_refresh_token);
            if (!valid_refresh_token) {
                throw new common_1.UnauthorizedException("Unauthorized admin");
            }
            const tokens = await this.generateTokensWithAdmin(admin);
            const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 3);
            await this.adminService.update(admin.id, { hashed_refresh_token });
            res.cookie("refresh_token", tokens.refresh_token, {
                httpOnly: true,
                maxAge: +process.env.REFRESH_TIME_MS,
            });
            return {
                access_token: tokens.access_token,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException("Expired token");
        }
    }
    async generateTokensWithCustomer(customer) {
        const payload = {
            id: customer.id,
            email: customer.email,
            is_active: customer.is_active,
        };
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token, refresh_token };
    }
    async signUpCustomer(createCustomerDto, res) {
        const existingCustomer = await this.customerService.findCustomerByEmail(createCustomerDto.email);
        if (existingCustomer) {
            throw new common_1.BadRequestException("Bunday admin mavjud!");
        }
        if (createCustomerDto.password !== createCustomerDto.confirm_password) {
            throw new common_1.BadRequestException("Parollar mos emas");
        }
        const hashed_password = await bcrypt.hash(createCustomerDto.password, 10);
        const newCustomer = await this.customerService.create({
            ...createCustomerDto,
            hashed_password,
        });
        const tokens = await this.generateTokensWithCustomer(newCustomer);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 10);
        const activation_link = uuid.v4();
        const updatedCustomer = await this.customerService.update(newCustomer.id, {
            hashed_refresh_token,
            activation_link,
        });
        res.cookie("refresh_token", tokens.refresh_token, {
            httpOnly: true,
            maxAge: +process.env.REFRESH_TIME_MS,
        });
        try {
            await this.mailService.sendMailToCustomer(updatedCustomer);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error sending mail");
        }
        return {
            message: "Customer muvaffaqiyatli qo'shildi!",
            customer: updatedCustomer,
            tokens,
        };
    }
    async signInCustomer(signInCustomerDto, res) {
        const customer = await this.customerService.findCustomerByEmail(signInCustomerDto.email);
        if (!customer) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        const isPasswordValid = await bcrypt.compare(signInCustomerDto.password, customer.hashed_password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        if (!customer.is_active) {
            throw new common_1.BadRequestException("Akkaunt hali faollashtirilmagan");
        }
        const tokens = await this.generateTokensWithCustomer(customer);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 4);
        await this.customerService.update(customer.id, { hashed_refresh_token });
        await this.setRefreshTokenCookie(res, tokens.refresh_token);
        return {
            message: "Tizimga muvaffaqiyatli kirildi",
            customer,
            tokens,
        };
    }
    async signOutCustomer(refreshToken, res) {
        const payload = await this.jwtService.verifyAsync(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        const customer = await this.customerService.findOne(payload.id);
        if (!customer) {
            throw new common_1.BadRequestException("admin not found");
        }
        await this.customerService.update(customer.id, {
            hashed_refresh_token: null,
        });
        res.clearCookie("refresh_token");
        return {
            message: "admin successfully logouted",
        };
    }
    async refreshTokensCustomer(refresh_token, res) {
        try {
            const payload = await this.jwtService.verifyAsync(refresh_token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            const customer = await this.customerService.findOne(payload.id);
            if (!customer) {
                throw new common_1.UnauthorizedException("Customer not found");
            }
            const valid_refresh_token = await bcrypt.compare(refresh_token, customer.hashed_refresh_token);
            if (!valid_refresh_token) {
                throw new common_1.UnauthorizedException("Unauthorized admin");
            }
            const tokens = await this.generateTokensWithCustomer(customer);
            const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 3);
            await this.customerService.update(customer.id, { hashed_refresh_token });
            res.cookie("refresh_token", tokens.refresh_token, {
                httpOnly: true,
                maxAge: +process.env.REFRESH_TIME_MS,
            });
            return {
                access_token: tokens.access_token,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException("Expired token");
        }
    }
    async generateTokensWithDelivery(delivery) {
        const payload = {
            id: delivery.id,
            email: delivery.email,
            is_active: delivery.is_active,
        };
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token, refresh_token };
    }
    async signUpDelivery(createDeliveryDto, res) {
        const existingDelivery = await this.deliveryService.findDeliveryByEmail(createDeliveryDto.email);
        if (existingDelivery) {
            throw new common_1.BadRequestException("Bunday admin mavjud!");
        }
        if (createDeliveryDto.password !== createDeliveryDto.confirm_password) {
            throw new common_1.BadRequestException("Parollar mos emas");
        }
        const hashed_password = await bcrypt.hash(createDeliveryDto.password, 10);
        const newDelivery = await this.deliveryService.create({
            ...createDeliveryDto,
            hashed_password,
        });
        const tokens = await this.generateTokensWithDelivery(newDelivery);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 10);
        const activation_link = uuid.v4();
        const updatedDelivery = await this.deliveryService.update(newDelivery.id, {
            hashed_refresh_token,
            activation_link,
        });
        res.cookie("refresh_token", tokens.refresh_token, {
            httpOnly: true,
            maxAge: +process.env.REFRESH_TIME_MS,
        });
        try {
            await this.mailService.sendMailToDelivery(updatedDelivery);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error sending mail");
        }
        return {
            message: "Delivery muvaffaqiyatli qo'shildi!",
            delivery: updatedDelivery,
            tokens,
        };
    }
    async signInDelivery(signInCustomerDto, res) {
        const delivery = await this.deliveryService.findDeliveryByEmail(signInCustomerDto.email);
        if (!delivery) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        const isPasswordValid = await bcrypt.compare(signInCustomerDto.password, delivery.hashed_password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException("Login yoki parol noto'g'ri");
        }
        if (!delivery.is_active) {
            throw new common_1.BadRequestException("Akkaunt hali faollashtirilmagan");
        }
        const tokens = await this.generateTokensWithDelivery(delivery);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 4);
        await this.deliveryService.update(delivery.id, { hashed_refresh_token });
        await this.setRefreshTokenCookie(res, tokens.refresh_token);
        return {
            message: "Tizimga muvaffaqiyatli kirildi",
            delivery,
            tokens,
        };
    }
    async signOutDelivery(refreshToken, res) {
        const payload = await this.jwtService.verifyAsync(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        const delivery = await this.deliveryService.findOne(payload.id);
        if (!delivery) {
            throw new common_1.BadRequestException("Delivery not found");
        }
        await this.deliveryService.update(delivery.id, {
            hashed_refresh_token: null,
        });
        res.clearCookie("refresh_token");
        return {
            message: "Delivery successfully logouted",
        };
    }
    async refreshTokensDelivery(refresh_token, res) {
        try {
            const payload = await this.jwtService.verifyAsync(refresh_token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            const delivery = await this.deliveryService.findOne(payload.id);
            if (!delivery) {
                throw new common_1.UnauthorizedException("Delivery not found");
            }
            const valid_refresh_token = await bcrypt.compare(refresh_token, delivery.hashed_refresh_token);
            if (!valid_refresh_token) {
                throw new common_1.UnauthorizedException("Unauthorized delivery");
            }
            const tokens = await this.generateTokensWithDelivery(delivery);
            const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 3);
            await this.deliveryService.update(delivery.id, { hashed_refresh_token });
            res.cookie("refresh_token", tokens.refresh_token, {
                httpOnly: true,
                maxAge: +process.env.REFRESH_TIME_MS,
            });
            return {
                access_token: tokens.access_token,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException("Expired token");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_service_1.AdminService,
        customers_service_1.CustomersService,
        delivery_service_1.DeliveryService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map