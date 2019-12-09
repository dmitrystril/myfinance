import ExpensesRepo from "../repository/ExpensesRepo";
import TransactionDto from "../dto/TransactionDto";
import TransactionMap from "../dto/mapper/TransactionMap";

class ExpensesService {
  private expensesRepo: ExpensesRepo;

  constructor() {
    this.expensesRepo = new ExpensesRepo();
  }

  public async getExpensesTransactionDtoList(): Promise<TransactionDto[]> {
    const expensesTransactionList = await this.expensesRepo.getExpensesTransactions();
    return expensesTransactionList.map((expensesTransaction) => TransactionMap.toDto(expensesTransaction));
  }
};

export default ExpensesService;
