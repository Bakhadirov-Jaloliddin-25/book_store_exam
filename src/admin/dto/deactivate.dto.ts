import { ApiProperty } from "@nestjs/swagger";

export class DeactivateDto {
  @ApiProperty({
    example: 1,
    description: "The ID of the user to deactivate",
  })
  readonly userId: number;
}
