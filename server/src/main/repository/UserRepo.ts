import { getManager, Repository } from "typeorm";

import IUserRepo from "./IUserRepo";
import { User } from "../model/User";

class UserRepo implements IUserRepo {
  private repository: Repository<User>;

  constructor() {
    this.repository = getManager().getRepository(User);
  }

  public async exists(user: User): Promise<boolean> {
    const result = await this.repository.findOne(user.id);
    return !!result === true;
  }

  public delete (user: User): Promise<any> {
    return this.repository.remove(user);
  }

  public async save(user: User): Promise<any> {
    const exists = await this.exists(user);

    let result = null;
    if (exists) {
      const persistedUser = await this.repository.findOne(user.id);
      result = await this.repository.update(persistedUser.id, user);
    } else  {
      result = await this.repository.save(user);
    }

    return result;
  }

  public async getUserById(userId: number): Promise<User> {
    return await this.repository.findOne(userId);
  }
}

export default UserRepo;
