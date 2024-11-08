import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthorDto {
  @ApiProperty({
    example: "Mehmet",
    description: "Author's first name",
  })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    example: "Yildiz",
    description: "Author's last name",
  })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    example: "1987-05-05, Turkey",
    description: "Author's biography",
  })
  @IsString()
  @IsNotEmpty()
  bio: string;
}
