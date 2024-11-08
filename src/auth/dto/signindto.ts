import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
  @ApiProperty({
    example: "sardor@gmail.com",
    description: "Admin email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "$Ard0r11",
    description: "Admin password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
