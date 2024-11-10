import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInDto } from "./dto/signindto";
import { Response } from "express";
import { CreateCustomerDto } from "../customers/dto/create-customer.dto";
import { CreateDeliveryDto } from "../delivery/dto/create-delivery.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    add(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: import("../admin/entities/admin.entity").Admin;
        access_token: string;
    }>;
    signIn(signInDto: SignInDto, res: Response): Promise<{
        message: string;
        admin: import("../admin/entities/admin.entity").Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOut(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokenAdmin(res: Response, refresh_token: string): Promise<{
        access_token: string;
    }>;
    signUpCustomer(createCustomerDto: CreateCustomerDto, res: Response): Promise<{
        message: string;
        customer: import("../customers/entities/customer.entity").Customer;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signInCustomer(signInDto: SignInDto, res: Response): Promise<{
        message: string;
        customer: import("../customers/entities/customer.entity").Customer;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOutCustomer(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokenCustomer(res: Response, refresh_token: string): Promise<{
        access_token: string;
    }>;
    signUpDelivery(createDeliveryDto: CreateDeliveryDto, res: Response): Promise<{
        message: string;
        delivery: import("../delivery/entities/delivery.entity").Delivery;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signInDelivery(signInDto: SignInDto, res: Response): Promise<{
        message: string;
        delivery: import("../delivery/entities/delivery.entity").Delivery;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signOutDelivery(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refreshTokenDelivery(res: Response, refresh_token: string): Promise<{
        access_token: string;
    }>;
}
