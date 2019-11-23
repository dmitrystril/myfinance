import { getManager, Repository } from "typeorm";

import ITransactionRepo from "./ITransactionRepo";
import { Transaction } from "../model/Transaction";

class TransactionRepo implements ITransactionRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  public getTranasctionsByUserId(userId: number): Promise<Transaction[]> {
    return this.repository.find({ relations: ['user'] });
  }

  public saveAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    return this.repository.save(transactions);
  }
}

export default TransactionRepo;
