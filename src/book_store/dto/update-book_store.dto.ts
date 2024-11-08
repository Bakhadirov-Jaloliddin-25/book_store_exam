import { PartialType } from "@nestjs/swagger";
import { CreateBookStoreDto } from "./create-book_store.dto";

export class UpdateBookStoreDto extends PartialType(CreateBookStoreDto) {}
