import { getManager, Repository } from "typeorm";

import ITransactionRepo from "./ITransactionRepo";
import { Transaction } from "../model/Transaction";

class TransactionRepo implements ITransactionRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  // public async exists(transaction: Transaction): Promise<boolean> {
  //   const result = await this.repository.findOne(transaction.id);
  //   return !!result === true;
  // }

  // public delete (transaction: Transaction): Promise<any> {
  //   return this.repository.remove(transaction);
  // }

  // public async save(transaction: Transaction): Promise<any> {
  //   const exists = await this.exists(transaction);

  //   let result = null;
  //   if (exists) {
  //     const persistedTransaction = await this.repository.findOne(transaction.id);
  //     result = await this.repository.update(persistedTransaction.id, transaction);
  //   } else  {
  //     result = await this.repository.save(transaction);
  //   }

  //   return result;
  // }

  public getTranasctionsByUserId(userId: number): Promise<Transaction[]> {
    // return this.repository.find({where: { user: { id: userId } }});
    return this.repository.find({ relations: ['user'] });
  }

  public saveAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    return this.repository.save(transactions);
  }
}

export default TransactionRepo;
