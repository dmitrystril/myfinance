import { getManager, Repository } from "typeorm";

import { Transaction } from "../model/Transaction";
import ITaxesRepo from "./ITaxesRepo";

class TaxesRepo implements ITaxesRepo {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getManager().getRepository(Transaction);
  }

  getTaxesTransactionDtoList(): Promise<any> {
    return this.repository
      .createQueryBuilder('transaction')
      .where('transaction.category = 0')
      .orderBy("transaction.date", "DESC")
      .getMany();

  }
}

export default TaxesRepo;
