import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface ITaxesRepo extends Repo<Transaction> {
  getTaxesTransactionDtoList(): Promise<any>
}

export default ITaxesRepo;
