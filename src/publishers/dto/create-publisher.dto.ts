import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreatePublisherDto {
  @ApiProperty({
    example: "Tasnim",
    description: "Publisher name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Publisher phone number",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "https://www.tasnim.uz/en/",
    description: "Publisher contact information",
  })
  @IsString()
  @IsNotEmpty()
  contact_info: string;
}
