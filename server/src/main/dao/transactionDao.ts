import { getManager } from "typeorm";

import { Transaction } from "../model/Transaction";

const transactionDao = {
  saveAll: async function(transactionVOList: any) {
    const transactionRepository = getManager().getRepository(Transaction);
    await transactionRepository.save(transactionVOList);
  },
};

export default transactionDao;
