import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @ApiProperty({
    example: "Iskanja",
    description: "Book name",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "This book is about China in 1949",
    description: "Book description",
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 250,
    description: "Book price",
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 1,
    description: "Author ID",
  })
  @IsNumber()
  author_id: number;

  @ApiProperty({
    example: 1,
    description: "Genre ID",
  })
  @IsNumber()
  genre_id: number;

  @ApiProperty({
    example: 1,
    description: "Publisher ID",
  })
  @IsNumber()
  publisher_id: number;

  @ApiProperty({
    example: 210,
    description: "Number of pages",
  })
  @IsNumber()
  num_of_pages: number;

  @ApiProperty({
    example: 2022,
    description: "Book publication year",
  })
  @Type(() => Date)
  @IsDate()
  year_of_publication: Date;

  @ApiProperty({
    example: 100,
    description: "Book stock",
  })
  @IsNumber()
  stock: number;

  @ApiProperty({
    example: 1,
    description: "Book store ID",
  })
  @IsNumber()
  book_store_id: number;
}
