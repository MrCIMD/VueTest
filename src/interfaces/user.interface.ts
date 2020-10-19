import { Profile } from "./profile.interface";
import { Role } from "./role.interface";

export interface User {
  id?: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  profile?: Profile;
  roles?: Role[];
}
