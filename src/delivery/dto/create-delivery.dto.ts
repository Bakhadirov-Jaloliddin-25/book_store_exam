import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateDeliveryDto {
  @ApiProperty({
    example: "Vinicius",
    description: "Delivery name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "crybaby@gmail.com",
    description: "Delivery email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "$Vinicius11",
    description: "Delivery password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "$Vinicius11",
    description: "Delivery confirm password",
  })
  @IsString()
  @IsNotEmpty()
  confirm_password: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Delivery phone number",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "CR7ronaldo",
    description: "Hashed Password",
  })
  @IsOptional()
  hashed_password?: string;

  @ApiProperty({
    example: "Hashed Refresh Token",
    description: "Hashed Refresh Token",
  })
  @IsOptional()
  hashed_refresh_token?: string;

  @ApiProperty({
    example: "link",
    description: "Activation Link",
  })
  @IsOptional()
  activation_link?: string;
}
