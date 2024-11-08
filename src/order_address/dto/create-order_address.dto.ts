import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderAddressDto {
  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @IsNumber()
  customer_id: number;

  @ApiProperty({
    example: 1,
    description: "Region ID",
  })
  @IsNumber()
  region_id: number;

  @ApiProperty({
    example: 1,
    description: "District ID",
  })
  @IsNumber()
  district_id: number;

  @ApiProperty({
    example: "Street",
    description: "Street",
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    example: "35",
    description: "House number",
  })
  @IsString()
  @IsNotEmpty()
  house: string;

  @ApiProperty({
    example: "longitude: 0, latitude: 0",
    description: "Location",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: "123456",
    description: "Post index",
  })
  @IsString()
  @IsNotEmpty()
  post_index: string;

  @ApiProperty({
    example: "Additional information",
    description: "Additional information",
  })
  @IsString()
  @IsNotEmpty()
  info: string;
}
