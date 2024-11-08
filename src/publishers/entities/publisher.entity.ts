import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Publisher {
  @ApiProperty({
    example: 1,
    description: "Publisher unique ID (auto increment)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Tasnim",
    description: "Publisher name",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "+998-99-123-45-67",
    description: "Publisher phone number",
  })
  @Column()
  phone_number: string;

  @ApiProperty({
    example: "https://www.tasnim.uz/en/",
    description: "Publisher contact information",
  })
  @Column()
  contact_info: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
