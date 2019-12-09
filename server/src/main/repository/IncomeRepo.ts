import { getManager, Repository, MoreThan } from "typeorm";

import { Transaction } from "../model/Transaction";
import IIncomeRepo from "./IIncomeRepo";

class IncomeRepo implements IIncomeRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getIncomeTransactions(): Promise<any> {
    return this.repository.find({
      where: {
        amount:  MoreThan(0)
      },
      relations: ['user']
    });
  }
}

export default IncomeRepo;
