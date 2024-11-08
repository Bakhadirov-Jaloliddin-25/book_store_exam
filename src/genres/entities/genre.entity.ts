import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Genre {
  @ApiProperty({
    example: 1,
    description: "Genre unique ID (autoIncrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Fantasiya",
    description: "Genre name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: true,
    description: "Genre description",
  })
  @Column()
  description: string;

  @OneToMany(() => Book, (book) => book.genre)
  books: Book[];
}
