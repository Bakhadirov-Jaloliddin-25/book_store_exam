import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCartDto {
  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @IsNumber()
  customer_id: number;

  @ApiProperty({
    example: "open",
    description: "Cart status (open, closed, cancelled)",
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    example: "2024-11-01",
    description: "Date of creation",
  })
  @Type(() => Date)
  @IsDate()
  created_at: Date;
}
