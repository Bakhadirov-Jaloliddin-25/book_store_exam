import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateOrderItemDto {
  @ApiProperty({
    example: 1,
    description: "Order ID",
  })
  @IsNumber()
  order_id: number;

  @ApiProperty({
    example: 1,
    description: "Book ID",
  })
  @IsNumber()
  book_id: number;

  @ApiProperty({
    example: 10,
    description: "Quantity of books ordered",
  })
  @IsNumber()
  quantity: number;
}
