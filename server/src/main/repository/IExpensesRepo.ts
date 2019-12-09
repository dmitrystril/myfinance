import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface IExpensesRepo extends Repo<Transaction> {
  getExpensesTransactions(): Promise<any>;
}

export default IExpensesRepo;
