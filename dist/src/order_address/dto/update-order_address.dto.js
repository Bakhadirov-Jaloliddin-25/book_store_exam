"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_address_dto_1 = require("./create-order_address.dto");
class UpdateOrderAddressDto extends (0, swagger_1.PartialType)(create_order_address_dto_1.CreateOrderAddressDto) {
}
exports.UpdateOrderAddressDto = UpdateOrderAddressDto;
//# sourceMappingURL=update-order_address.dto.js.map