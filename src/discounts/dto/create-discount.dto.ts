import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber } from "class-validator";

export class CreateDiscountDto {
  @ApiProperty({
    example: 1,
    description: "Book ID for discount",
  })
  @IsNumber()
  book_id: number;

  @ApiProperty({
    example: "2022-01-01",
    description: "Discount start date",
  })
  @IsDate()
  start_date: Date;

  @ApiProperty({
    example: "2022-01-31",
    description: "Discount end date",
  })
  @IsDate()
  end_date: Date;

  @ApiProperty({
    example: 20,
    description: "Discount percentage",
  })
  @IsNumber()
  percents: number;
}
