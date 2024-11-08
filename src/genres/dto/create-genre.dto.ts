import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenreDto {
  @ApiProperty({
    example: "Fiction",
    description: "Genre name",
  })
  @IsString({})
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "Fantasy",
    description: "Genre description",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
