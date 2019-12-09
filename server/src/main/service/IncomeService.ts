import IncomeRepo from "../repository/IncomeRepo";
import TransactionDto from "../dto/TransactionDto";
import TransactionMap from "../dto/mapper/TransactionMap";

class IncomeService {
  private incomeRepo: IncomeRepo;

  constructor() {
    this.incomeRepo = new IncomeRepo();
  }

  public async getIncomeTransactionDtoList(): Promise<TransactionDto[]> {
    const incomeTransactionList = await this.incomeRepo.getIncomeTransactions();
    return incomeTransactionList.map((incomeTransaction) => TransactionMap.toDto(incomeTransaction));
  }
};

export default IncomeService;
