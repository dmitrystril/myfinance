import Repo from "./IRepo";
import { Transaction } from "../model/Transaction";

interface IReportRepo extends Repo<Transaction> {
  // select mcc, mcc_description, sum(amount) as total_amount, currency
  // from transaction
  // where amount < 0 and mcc_description is not null
  // group by mcc, mcc_description, currency
  // order by total_amount asc
  // limit 10;

  // select mcc, mcc_description, sum(cashback) as total_cashback, currency
  // from transaction
  // where cashback is not null and mcc_description is not null
  // group by mcc, mcc_description, currency
  // order by total_cashback desc
  // limit 10;
}

export default IReportRepo;
