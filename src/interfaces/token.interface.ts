import { User } from "./user.interface";

export interface IToken {
  token: string;
  user: User;
  exp: Date;
}
