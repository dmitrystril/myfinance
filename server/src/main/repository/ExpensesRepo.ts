import { getManager, Repository, LessThan } from "typeorm";

import { Transaction } from "../model/Transaction";
import IExpensesRepo from "./IExpensesRepo";

class ExpensesRepo implements IExpensesRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getExpensesTransactions(): Promise<any> {
    return this.repository
      .createQueryBuilder('transaction')
      .where('transaction.amount < 0')
      .orderBy("transaction.date", "DESC")
      .getMany();

    // return this.repository
    //   .createQueryBuilder('transaction')
    //   .select("transaction")
    //   .addSelect("mcc.description", "mcc_description")
    //   .innerJoin(Mcc, 'mcc', 'transaction.mcc = mcc.code')
    //   .where('transaction.amount < 0')
    //   .getRawMany();
  }

  async setTransactionCategory(transactionId: number, category: number): Promise<any> {
    let transaction = await this.repository.findOne(transactionId);
    transaction.category = category;

    return this.repository.save(transaction);
  }
}

export default ExpensesRepo;
