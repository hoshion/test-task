import {Body, Controller, Delete, Post, Put} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create.user.dto";
import {CreateAccountDto} from "./dto/create.account.dto";
import {AccountsService} from "./accounts.service";

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  createAccount(@Body() createAccount: CreateAccountDto) {
    this.accountsService.createAccount(createAccount);
  }

  @Delete()
  deleteAccount(@Body() createUser: CreateUserDto) {

  }

  @Put()
  updateAccount(@Body() createUser: CreateUserDto) {

  }
}