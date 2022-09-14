import {Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";
import {Database} from "../interfaces/database";
import {User} from "../entities/user.entity";

@Module({
  providers: [UsersService, Database<User>],
  controllers: [UsersController],
})
export class UsersModule {}