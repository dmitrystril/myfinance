import { getManager, Repository } from "typeorm";

import IMccRepo from "./IMccRepo";
import { Mcc } from "../model/Mcc";

class MccRepo implements IMccRepo {
  private repository: Repository<Mcc>;

  constructor() {
    this.repository = getManager().getRepository(Mcc);
  }

  getAllMcc(): Promise<any> {
    return this.repository.find();
  }
}

export default MccRepo;
