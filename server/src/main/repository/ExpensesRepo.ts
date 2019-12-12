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
        amount: LessThan(0)
      },
      relations: ['user']
    });

    // return this.repository
    //   .createQueryBuilder('transaction')
    //   .select("transaction")
    //   .addSelect("mcc.description", "mcc_description")
    //   .innerJoin(Mcc, 'mcc', 'transaction.mcc = mcc.code')
    //   .where('transaction.amount < 0')
    //   .getRawMany();
  }
}

export default ExpensesRepo;
