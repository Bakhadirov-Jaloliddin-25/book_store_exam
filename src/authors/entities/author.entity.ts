import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Author {
  @ApiProperty({
    example: 1,
    description: "Author unique ID (autoincrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Mehmet",
    description: "Author first name",
  })
  @Column()
  first_name: string;

  @ApiProperty({
    example: "Yildiz",
    description: "Author last name",
  })
  @Column()
  last_name: string;

  @ApiProperty({
    example: "1987-05-05, Turkey",
    description: "Author biography",
  })
  @Column()
  bio: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
