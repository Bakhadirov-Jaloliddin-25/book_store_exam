import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePaymentDto {
  @ApiProperty({
    example: 1,
    description: "Order ID",
  })
  @IsNumber()
  order_id: number;

  @ApiProperty({
    example: "2024-11-01",
    description: "Payment date",
  })
  @Type(() => Date)
  @IsDate()
  payment_date: Date;

  @ApiProperty({
    example: 100,
    description: "Payment amount",
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: 1,
    description: "Payment method ID",
  })
  @IsNumber()
  payment_method_id: number;

  @ApiProperty({
    example: "Paid",
    description: "Payment status",
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
