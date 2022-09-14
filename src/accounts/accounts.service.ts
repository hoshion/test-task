import {Injectable} from "@nestjs/common";
import {Database} from "../interfaces/database";
import {Account} from "../entities/account.entity";
import {CreateAccountDto} from "./dto/create.account.dto";

@Injectable()
export class AccountsService {
  constructor(private accountsRepository: Database<Account>) {}

  createAccount(createAccount: CreateAccountDto) {
    const account: Account = new Account();
  }

  deleteAccount() {

  }

  renameAccount() {

  }

  changeAccountNumber() {

  }
}