import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({
    example: "Cristiano",
    description: "First Name",
  })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    example: "Ronaldo",
    description: "Last Name",
  })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    example: "cr7ronaldo@gmail.com",
    description: "Email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "CR7ronaldo",
    description: "Password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "CR7ronaldo",
    description: "Password",
  })
  @IsString()
  @IsNotEmpty()
  confirm_password: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Phone Number",
  })
  @IsPhoneNumber("UZ")
  phone: string;

  // @ApiProperty({
  //   example: "2022-01-01",
  //   description: "Created At",
  // })
  // @Type(() => Date)
  // @IsDate()
  // created_at: Date;

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
