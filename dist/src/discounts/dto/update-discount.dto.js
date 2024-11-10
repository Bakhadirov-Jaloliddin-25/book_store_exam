"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiscountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_discount_dto_1 = require("./create-discount.dto");
class UpdateDiscountDto extends (0, swagger_1.PartialType)(create_discount_dto_1.CreateDiscountDto) {
}
exports.UpdateDiscountDto = UpdateDiscountDto;
//# sourceMappingURL=update-discount.dto.js.map