import { getManager, Repository } from "typeorm";

import IUserRepo from "./IUserRepo";
import { User } from "../model/User";

class UserRepo implements IUserRepo {
  private repository: Repository<User>;

  constructor() {
    this.repository = getManager().getRepository(User);
  }

  public getUserById(userId: number): Promise<User> {
    return this.repository.findOne(userId);
  }
}

export default UserRepo;
