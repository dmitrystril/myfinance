import Repo from "./IRepo";
import { User } from "../model/User";

interface IUserRepo extends Repo<User> {
  getUserById(userId: number): Promise<User>;
}

export default IUserRepo;
