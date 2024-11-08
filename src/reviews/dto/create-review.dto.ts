import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
  @ApiProperty({
    example: 5,
    description: "Book ID",
  })
  @IsNumber()
  book_id: number;

  @ApiProperty({
    example: 4,
    description: "Customer ID",
  })
  @IsNumber()
  customer_id: number;

  @ApiProperty({
    example: "Nice Book",
    description: "Review",
  })
  @IsString()
  @IsNotEmpty()
  review: string;
}
