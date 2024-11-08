import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
  @ApiProperty({
    example: "Credit Card",
    description: "Payment method type",
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: "Visa",
    description: "Payment method brand",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
