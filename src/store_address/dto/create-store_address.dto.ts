import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStoreAddressDto {
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
    example: "longitude: 0, latitude: 0",
    description: "Location",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: "Additional information",
    description: "Additional information",
  })
  @IsString()
  @IsNotEmpty()
  info: string;
}
