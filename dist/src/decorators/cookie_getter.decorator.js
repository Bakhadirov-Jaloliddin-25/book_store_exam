"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieGetter = void 0;
const common_1 = require("@nestjs/common");
exports.CookieGetter = (0, common_1.createParamDecorator)(async (data, context) => {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.cookies[data];
    if (!refreshToken) {
        throw new common_1.UnauthorizedException("Token is not found");
    }
    return refreshToken;
});
//# sourceMappingURL=cookie_getter.decorator.js.map