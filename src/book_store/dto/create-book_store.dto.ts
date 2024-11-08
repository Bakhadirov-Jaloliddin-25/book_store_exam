import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateBookStoreDto {
  @ApiProperty({
    example: "Azon",
    description: "Book store name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Book store phone number",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "www.azon.uz",
    description: "Book store website URL",
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 1,
    description: "Book store address ID",
  })
  @IsNumber()
  address_id: number;
}
