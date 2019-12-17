import { getManager, Repository } from "typeorm";

import { Transaction } from "../model/Transaction";
import IBillsRepo from "./IBillsRepo";

class BillsRepo implements IBillsRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getBillsTransactionDtoList(): Promise<any> {
    return this.repository
      .createQueryBuilder('transaction')
      .where('transaction.category = 1')
      .orderBy("transaction.date", "DESC")
      .getMany();

  }
}

export default BillsRepo;
