"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublisherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_publisher_dto_1 = require("./create-publisher.dto");
class UpdatePublisherDto extends (0, swagger_1.PartialType)(create_publisher_dto_1.CreatePublisherDto) {
}
exports.UpdatePublisherDto = UpdatePublisherDto;
//# sourceMappingURL=update-publisher.dto.js.map