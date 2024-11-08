import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @IsNumber()
  customer_id: number;

  @ApiProperty({
    example: 1,
    description: "Order address ID",
  })
  @IsNumber()
  order_address_id: number;

  @ApiProperty({
    example: 1,
    description: "Book store ID",
  })
  @IsNumber()
  book_store_id: number;

  @ApiProperty({
    example: 1,
    description: "Delivery ID",
  })
  @IsNumber()
  delivery_id: number;

  @ApiProperty({
    example: "2022-01-01T15:30:00Z",
    description: "Order date",
  })
  @Type(() => Date)
  @IsDate()
  order_date: Date;

  @ApiProperty({
    example: 400,
    description: "Total price",
  })
  @IsNumber()
  total_price: number;

  @ApiProperty({
    example: "Completed",
    description: "Order status",
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
