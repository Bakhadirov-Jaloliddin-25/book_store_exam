import { ApiProperty } from "@nestjs/swagger";

export class ActivateDto {
  @ApiProperty({
    example: 1,
    description: "ID of the user to activate",
  })
  readonly userId: number;
}
