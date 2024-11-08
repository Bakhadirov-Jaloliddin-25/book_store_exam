import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import * as bcrypt from "bcrypt";
import * as uuid from "uuid";
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

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    private readonly customerService: CustomersService,
    private readonly deliveryService: DeliveryService,
    private readonly mailService: MailService
  ) {}

  async setRefreshTokenCookie(res: Response, refreshToken: string) {
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_TIME_MS),
    });
  }

  async generateTokensWithAdmin(admin: Admin) {
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

  async AddAdmin(createAdminDto: CreateAdminDto, res: Response) {
    const existingAdmin = await this.adminService.findAdminByEmail(
      createAdminDto.email
    );

    if (existingAdmin) {
      throw new BadRequestException("Bunday admin mavjud!");
    }

    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException("Parollar mos emas");
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

  async signInAdmin(signInAdminDto: SignInDto, res: Response) {
    const admin = await this.adminService.findAdminByEmail(
      signInAdminDto.email
    );

    if (!admin) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    const isPasswordValid = await bcrypt.compare(
      signInAdminDto.password,
      admin.hashed_password
    );

    if (!isPasswordValid) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    if (!admin.is_active) {
      throw new BadRequestException("Akkaunt hali faollashtirilmagan");
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

  async signOutAdmin(refreshToken: string, res: Response) {
    const payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    const admin = await this.adminService.findOne(payload.id);
    if (!admin) {
      throw new BadRequestException("admin not found");
    }

    await this.adminService.update(admin.id, { hashed_refresh_token: null });

    res.clearCookie("refresh_token");

    return {
      message: "admin successfully logouted",
    };
  }

  async refreshTokensAdmin(refresh_token: string, res: Response) {
    try {
      const payload = await this.jwtService.verifyAsync(refresh_token, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });

      const admin = await this.adminService.findOne(payload.id);
      if (!admin) {
        throw new UnauthorizedException("Admin not found");
      }

      const valid_refresh_token = await bcrypt.compare(
        refresh_token,
        admin.hashed_refresh_token
      );
      if (!valid_refresh_token) {
        throw new UnauthorizedException("Unauthorized admin");
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
    } catch (error) {
      throw new BadRequestException("Expired token");
    }
  }

  async generateTokensWithCustomer(customer: Customer) {
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

  async signUpCustomer(createCustomerDto: CreateCustomerDto, res: Response) {
    const existingCustomer = await this.customerService.findCustomerByEmail(
      createCustomerDto.email
    );

    if (existingCustomer) {
      throw new BadRequestException("Bunday admin mavjud!");
    }

    if (createCustomerDto.password !== createCustomerDto.confirm_password) {
      throw new BadRequestException("Parollar mos emas");
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
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error sending mail");
    }

    return {
      message: "Customer muvaffaqiyatli qo'shildi!",
      customer: updatedCustomer,
      tokens,
    };
  }

  async signInCustomer(signInCustomerDto: SignInDto, res: Response) {
    const customer = await this.customerService.findCustomerByEmail(
      signInCustomerDto.email
    );

    if (!customer) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    const isPasswordValid = await bcrypt.compare(
      signInCustomerDto.password,
      customer.hashed_password
    );

    if (!isPasswordValid) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    if (!customer.is_active) {
      throw new BadRequestException("Akkaunt hali faollashtirilmagan");
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

  async signOutCustomer(refreshToken: string, res: Response) {
    const payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    const customer = await this.customerService.findOne(payload.id);
    if (!customer) {
      throw new BadRequestException("admin not found");
    }

    await this.customerService.update(customer.id, {
      hashed_refresh_token: null,
    });

    res.clearCookie("refresh_token");

    return {
      message: "admin successfully logouted",
    };
  }

  async refreshTokensCustomer(refresh_token: string, res: Response) {
    try {
      const payload = await this.jwtService.verifyAsync(refresh_token, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });

      const customer = await this.customerService.findOne(payload.id);
      if (!customer) {
        throw new UnauthorizedException("Customer not found");
      }

      const valid_refresh_token = await bcrypt.compare(
        refresh_token,
        customer.hashed_refresh_token
      );
      if (!valid_refresh_token) {
        throw new UnauthorizedException("Unauthorized admin");
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
    } catch (error) {
      throw new BadRequestException("Expired token");
    }
  }

  async generateTokensWithDelivery(delivery: Delivery) {
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

  async signUpDelivery(createDeliveryDto: CreateDeliveryDto, res: Response) {
    const existingDelivery = await this.deliveryService.findDeliveryByEmail(
      createDeliveryDto.email
    );

    if (existingDelivery) {
      throw new BadRequestException("Bunday admin mavjud!");
    }

    if (createDeliveryDto.password !== createDeliveryDto.confirm_password) {
      throw new BadRequestException("Parollar mos emas");
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
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error sending mail");
    }

    return {
      message: "Delivery muvaffaqiyatli qo'shildi!",
      delivery: updatedDelivery,
      tokens,
    };
  }

  async signInDelivery(signInCustomerDto: SignInDto, res: Response) {
    const delivery = await this.deliveryService.findDeliveryByEmail(
      signInCustomerDto.email
    );

    if (!delivery) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    const isPasswordValid = await bcrypt.compare(
      signInCustomerDto.password,
      delivery.hashed_password
    );

    if (!isPasswordValid) {
      throw new BadRequestException("Login yoki parol noto'g'ri");
    }

    if (!delivery.is_active) {
      throw new BadRequestException("Akkaunt hali faollashtirilmagan");
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

  async signOutDelivery(refreshToken: string, res: Response) {
    const payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    const delivery = await this.deliveryService.findOne(payload.id);
    if (!delivery) {
      throw new BadRequestException("Delivery not found");
    }

    await this.deliveryService.update(delivery.id, {
      hashed_refresh_token: null,
    });

    res.clearCookie("refresh_token");

    return {
      message: "Delivery successfully logouted",
    };
  }

  async refreshTokensDelivery(refresh_token: string, res: Response) {
    try {
      const payload = await this.jwtService.verifyAsync(refresh_token, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });

      const delivery = await this.deliveryService.findOne(payload.id);
      if (!delivery) {
        throw new UnauthorizedException("Delivery not found");
      }

      const valid_refresh_token = await bcrypt.compare(
        refresh_token,
        delivery.hashed_refresh_token
      );
      if (!valid_refresh_token) {
        throw new UnauthorizedException("Unauthorized delivery");
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
    } catch (error) {
      throw new BadRequestException("Expired token");
    }
  }
}
