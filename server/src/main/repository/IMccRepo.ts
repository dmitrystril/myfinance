import Repo from "./IRepo";
import { Mcc } from "../model/Mcc";

interface IMccRepo extends Repo<Mcc> {
  getAllMcc(): Promise<any>;
}

export default IMccRepo;
