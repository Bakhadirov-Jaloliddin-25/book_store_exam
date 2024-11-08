import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Max, Min } from "class-validator";

export class CreateRatingDto {
  @ApiProperty({
    example: 5,
    description: "Rating value (1-5)",
  })
  @IsNumber()
  @Max(5)
  @Min(1)
  rating: number;

  @ApiProperty({
    example: 1,
    description: "Book ID",
  })
  @IsNumber()
  book_id: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @IsNumber()
  customer_id: number;
}
