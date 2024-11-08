import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartItemDto {
  @ApiProperty({
    example: 1,
    description: "Cart ID",
  })
  @IsNumber()
  cart_id: number;

  @ApiProperty({
    example: 1,
    description: "Book ID",
  })
  @IsNumber()
  book_id: number;

  @ApiProperty({
    example: 1,
    description: "Quantity",
  })
  @IsNumber()
  quantity: number;
}
