import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInDto } from "./dto/signindto";
import { CreatorGuard } from "../guards/creator.guard";
import { CookieGetter } from "../decorators/cookie_getter.decorator";
import { Response } from "express";
import { CreateCustomerDto } from "../customers/dto/create-customer.dto";
import { CreateDeliveryDto } from "../delivery/dto/create-delivery.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@ApiTags("Authorization (Ro'yhatdan o'tish)")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Yangi Admin qo'shish" })
  @ApiResponse({
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
  })
  @UseGuards(CreatorGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post("add-admin")
  async add(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.AddAdmin(createAdminDto, res);
  }

  @ApiOperation({ summary: "Adminni tizimga kiritish (signIn)" })
  @ApiResponse({
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
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInAdmin(signInDto, res);
  }

  @ApiOperation({ summary: "Adminni tizimdan chiqarish (signOut)" })
  @ApiResponse({
    status: 200,
    description: "Admin tizimdan muvaffaqiyatli chiqarildi",
    schema: {
      example: {
        message: "Tizimdan muvaffaqiyatli chiqildi",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-out")
  async signOut(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutAdmin(refreshToken, res);
  }

  @ApiOperation({ summary: "Yangi access token olish (refreshToken)" })
  @ApiResponse({
    status: 200,
    description: "Yangi access token berildi",
    schema: {
      example: {
        access_token: "yangi_access_token",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("refreshtoken-admin")
  async refreshTokenAdmin(
    @Res({ passthrough: true }) res: Response,
    @CookieGetter("refresh_token") refresh_token: string
  ) {
    return this.authService.refreshTokensAdmin(refresh_token, res);
  }

  @ApiOperation({ summary: "Yangi Customer qo'shish" })
  @ApiResponse({
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
  })
  @HttpCode(HttpStatus.CREATED)
  @Post("sign-up-customer")
  async signUpCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signUpCustomer(createCustomerDto, res);
  }

  @ApiOperation({ summary: "Customerni tizimga kiritish (signIn)" })
  @ApiResponse({
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
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-in-customer")
  async signInCustomer(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInCustomer(signInDto, res);
  }

  @ApiOperation({ summary: "Customeri tizimdan chiqarish (signOut)" })
  @ApiResponse({
    status: 200,
    description: "Customer tizimdan muvaffaqiyatli chiqarildi",
    schema: {
      example: {
        message: "Tizimdan muvaffaqiyatli chiqildi",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-out-customer")
  async signOutCustomer(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutCustomer(refreshToken, res);
  }

  @ApiOperation({ summary: "Yangi access token olish (refreshToken)" })
  @ApiResponse({
    status: 200,
    description: "Yangi access token berildi",
    schema: {
      example: {
        access_token: "yangi_access_token",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("refreshtoken-customer")
  async refreshTokenCustomer(
    @Res({ passthrough: true }) res: Response,
    @CookieGetter("refresh_token") refresh_token: string
  ) {
    return this.authService.refreshTokensCustomer(refresh_token, res);
  }

  @ApiOperation({ summary: "Yangi Delivery qo'shish" })
  @ApiResponse({
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
  })
  @HttpCode(HttpStatus.CREATED)
  @Post("sign-up-delivery")
  async signUpDelivery(
    @Body() createDeliveryDto: CreateDeliveryDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signUpDelivery(createDeliveryDto, res);
  }

  @ApiOperation({ summary: "Deliveryni tizimga kiritish (signIn)" })
  @ApiResponse({
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
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-in-delivery")
  async signInDelivery(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInDelivery(signInDto, res);
  }

  @ApiOperation({ summary: "Deliveryni tizimdan chiqarish (signOut)" })
  @ApiResponse({
    status: 200,
    description: "Delivery tizimdan muvaffaqiyatli chiqarildi",
    schema: {
      example: {
        message: "Tizimdan muvaffaqiyatli chiqildi",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("sign-out-delivery")
  async signOutDelivery(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOutDelivery(refreshToken, res);
  }

  @ApiOperation({ summary: "Yangi access token olish (refreshToken)" })
  @ApiResponse({
    status: 200,
    description: "Yangi access token berildi",
    schema: {
      example: {
        access_token: "yangi_access_token",
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post("refreshtoken-delivery")
  async refreshTokenDelivery(
    @Res({ passthrough: true }) res: Response,
    @CookieGetter("refresh_token") refresh_token: string
  ) {
    return this.authService.refreshTokensDelivery(refresh_token, res);
  }
}
