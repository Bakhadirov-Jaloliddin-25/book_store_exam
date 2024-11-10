"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_item_dto_1 = require("./create-order_item.dto");
class UpdateOrderItemDto extends (0, swagger_1.PartialType)(create_order_item_dto_1.CreateOrderItemDto) {
}
exports.UpdateOrderItemDto = UpdateOrderItemDto;
//# sourceMappingURL=update-order_item.dto.js.map