import {Account} from "./account.entity";

export class User {
  username: string;
  password: string;
  accounts: Account[] = [];
}