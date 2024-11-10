"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDistrictDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_district_dto_1 = require("./create-district.dto");
class UpdateDistrictDto extends (0, swagger_1.PartialType)(create_district_dto_1.CreateDistrictDto) {
}
exports.UpdateDistrictDto = UpdateDistrictDto;
//# sourceMappingURL=update-district.dto.js.map