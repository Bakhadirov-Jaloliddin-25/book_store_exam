"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSelfGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AdminSelfGuard = class AdminSelfGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException({
                message: "Headerda Token berilmagan",
            });
        }
        const [bearer, token] = authHeader.split(" ");
        if (bearer !== "Bearer" || !token) {
            throw new common_1.UnauthorizedException({
                message: "Bearer va token berilmagan",
            });
        }
        let payload;
        try {
            payload = this.jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY,
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                message: "Token verifikatsiyadan o'tmadi!",
                error,
            });
        }
        req.admin = payload;
        if (req.admin.is_creator) {
            return true;
        }
        if (String(req.admin.id) !== req.params.id) {
            throw new common_1.ForbiddenException("Ruxsat etilmagan admin");
        }
        return true;
    }
};
exports.AdminSelfGuard = AdminSelfGuard;
exports.AdminSelfGuard = AdminSelfGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AdminSelfGuard);
//# sourceMappingURL=admin-self.guard.js.map