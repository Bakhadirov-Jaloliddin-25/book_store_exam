"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookStoreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_book_store_dto_1 = require("./create-book_store.dto");
class UpdateBookStoreDto extends (0, swagger_1.PartialType)(create_book_store_dto_1.CreateBookStoreDto) {
}
exports.UpdateBookStoreDto = UpdateBookStoreDto;
//# sourceMappingURL=update-book_store.dto.js.map