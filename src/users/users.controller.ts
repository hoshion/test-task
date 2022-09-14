import {Body, Controller, Post, Req} from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import {UsersService} from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    this.usersService.createUser(createUser);
  }
}