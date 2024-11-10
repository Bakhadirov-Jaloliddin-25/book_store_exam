import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/entities/admin.entity";
import { Response } from "express";
import { SignInDto } from "./dto/signindto";
import { MailService } from "../mail/mail.service";
import { CustomersService } from "../customers/customers.service";
import { CreateCustomerDto } from "../customers/dto/create-customer.dto";
import { Customer } from "../customers/entities/customer.entity";
import { DeliveryService } from "../delivery/delivery.service";
import { CreateDeliveryDto } from "../delivery/dto/create-delivery.dto";
import { Delivery } from "../delivery/entities/delivery.entity";
export declare class AuthService {
    private readonly jwtService;
    private readonly adminService;
    private readonly customerService;
    private readonly deliveryService;
    private readonly mailService;
    constructor(jwtService: JwtService, adminService: AdminService, customerService: CustomersService, deliveryService: DeliveryService, mailService: MailService);
    setRefreshTokenCookie(res: Response, refreshToken: string): Promise<void>;
    generateTokensWithAdmin(admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    AddAdmin(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        access_token: string;
    }>;
    signInAdmin(signInAdminDto: SignInDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOutAdmin(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokensAdmin(refresh_token: string, res: Response): Promise<{
        access_token: string;
    }>;
    generateTokensWithCustomer(customer: Customer): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signUpCustomer(createCustomerDto: CreateCustomerDto, res: Response): Promise<{
        message: string;
        customer: Customer;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signInCustomer(signInCustomerDto: SignInDto, res: Response): Promise<{
        message: string;
        customer: Customer;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOutCustomer(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokensCustomer(refresh_token: string, res: Response): Promise<{
        access_token: string;
    }>;
    generateTokensWithDelivery(delivery: Delivery): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signUpDelivery(createDeliveryDto: CreateDeliveryDto, res: Response): Promise<{
        message: string;
        delivery: Delivery;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signInDelivery(signInCustomerDto: SignInDto, res: Response): Promise<{
        message: string;
        delivery: Delivery;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOutDelivery(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokensDelivery(refresh_token: string, res: Response): Promise<{
        access_token: string;
    }>;
}
