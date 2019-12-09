import { getManager, Repository, LessThan } from "typeorm";

import { Transaction } from "../model/Transaction";
import IExpensesRepo from "./IExpensesRepo";

class ExpensesRepo implements IExpensesRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getExpensesTransactions(): Promise<any> {
    return this.repository.find({
      where: {
        amount:  LessThan(0)
      },
      relations: ['user']
    });
  }
}

export default ExpensesRepo;
