import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface ITransactionRepo extends Repo<Transaction> {
  saveAllTransactions(transactions: Transaction[]): Promise<any>;
}

export default ITransactionRepo;
