import {User} from "../entities/user.entity";
import {CreateUserDto} from "./dto/create.user.dto";
import {Database} from "../interfaces/database";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(private usersRepository: Database<User>) {};

  createUser(createUserDTO: CreateUserDto): User {
    const user: User = new User();
    user.username = createUserDTO.username;
    user.password = createUserDTO.password

    this.usersRepository.INSERT(user);

    return user;
  }

  validateUser(username: string, password: string): boolean {
    if (!this.usersRepository.EXISTS_BY('username', username)) return false;

    const user = this.usersRepository.SELECT_FIRST_BY('username', username);

    return user.password === password;
  }

}