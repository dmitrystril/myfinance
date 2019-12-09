import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface IIncomeRepo extends Repo<Transaction> {
  getIncomeTransactions(): Promise<any>;
}

export default IIncomeRepo;
