import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Admin",
    description: "Admin name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "admin@gmail.com",
    description: "Admin email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Admin phone number",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "qwerty12345",
    description: "Admin password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "qwerty12345",
    description: "Admin password confirmation",
  })
  @IsString()
  @IsNotEmpty()
  confirm_password: string;

  @ApiProperty({
    example: true,
    description: "Is admin creator?",
  })
  @IsBoolean()
  is_creator: boolean;

  @ApiProperty({
    example: true,
    description: "Is admin active?",
  })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({
    example: "$2b$10$8j7j1L58hJ9b2Y07y7.m6O6c.6.d1905677355282666240",
    description: "Hashed refresh token",
  })
  hashed_refresh_token?: string;

  @ApiProperty({
    example: "$2b$10$8j7j1L58hJ9b2Y07y7.m6O6c.6.d1905677355282666240",
    description: "Hashed password",
  })
  hashed_password?: string;

  @ApiProperty({
    example: "https://example.com/verify/admin/12345",
    description: "Admin activation link",
  })
  activation_link?: string;
}
