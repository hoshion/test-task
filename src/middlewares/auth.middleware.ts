import {Injectable, NestMiddleware, Req, UnauthorizedException} from "@nestjs/common";
import {NextFunction, Response} from "express";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { user, password } = req.body as any;
    const validated = this.usersService.validateUser(user, password)
    if (!validated) throw new UnauthorizedException();
    next();
  }
}