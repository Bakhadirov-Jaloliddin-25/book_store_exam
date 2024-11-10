"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeliveryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_delivery_dto_1 = require("./create-delivery.dto");
class UpdateDeliveryDto extends (0, swagger_1.PartialType)(create_delivery_dto_1.CreateDeliveryDto) {
}
exports.UpdateDeliveryDto = UpdateDeliveryDto;
//# sourceMappingURL=update-delivery.dto.js.map