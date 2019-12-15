import { getManager, Repository, MoreThan } from "typeorm";

import { Transaction } from "../model/Transaction";
import IIncomeRepo from "./IIncomeRepo";

class IncomeRepo implements IIncomeRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getIncomeTransactions(): Promise<any> {
    return this.repository
      .createQueryBuilder('transaction')
      .where('transaction.amount > 0')
      .orderBy("transaction.date", "DESC")
      .getMany();

  }
}

export default IncomeRepo;
