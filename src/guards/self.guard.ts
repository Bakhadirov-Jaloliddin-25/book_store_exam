import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class SelfGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Headerda Token berilmagan",
      });
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Bearer va token berilmagan",
      });
    }

    let payload: any;

    try {
      payload = this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });
    } catch (error) {
      throw new UnauthorizedException({
        message: "Token verifikatsiyadan o'tmadi!",
        error,
      });
    }

    req.user = payload;

    if (req.user.is_admin) {
      return true;
    }

    if (String(req.user.id) !== req.params.id) {
      throw new ForbiddenException("Ruxsat etilmagan foydalanuvchi");
    }

    return true;
  }
}
