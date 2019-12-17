import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface IBillsRepo extends Repo<Transaction> {
  getBillsTransactionDtoList(): Promise<any>
}

export default IBillsRepo;
