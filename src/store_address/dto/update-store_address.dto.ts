import { PartialType } from "@nestjs/swagger";
import { CreateStoreAddressDto } from "./create-store_address.dto";

export class UpdateStoreAddressDto extends PartialType(CreateStoreAddressDto) {}
