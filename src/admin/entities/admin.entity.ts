import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @ApiProperty({
    example: 1,
    description: "Admin unique ID (autoIncrement)",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Admin",
    description: "Admin name",
  })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({
    example: "admin@gmail.com",
    description: "Admin email",
  })
  @Column(/*{ unique: true, length: 150 }*/)
  email: string;

  @ApiProperty({
    example: "+998991234567",
    description: "Admin phone number",
  })
  @Column({ length: 20, nullable: true })
  phone_number?: string;

  @ApiProperty({
    example: "qwerty12345$",
    description: "Admin password",
  })
  @Column({ nullable: true })
  hashed_password?: string;

  @ApiProperty({
    example: "Admin refresh token",
    description: "Admin refresh token",
  })
  @Column({ nullable: true })
  hashed_refresh_token?: string;

  @ApiProperty({
    example: true,
    description: "Admin status (active)",
  })
  @Column({ default: true })
  is_active: boolean;

  @ApiProperty({
    example: false,
    description: "Admin creator (false)",
  })
  @Column({ default: false })
  is_creator: boolean;

  @ApiProperty({
    example: "https://example.com/admin/activate/123456",
    description: "Admin activation link",
  })
  activation_link: string;
}
