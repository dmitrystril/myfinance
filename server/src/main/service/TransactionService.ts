import TransactionRepo from '../repository/TransactionRepo';
import TransactionDto from '../dto/TransactionDto';
import { Transaction } from '../model/Transaction';
import TransactionMap from '../dto/mapper/TransactionMap';
import UserRepo from '../repository/UserRepo';

class TransactionService {
  private transactionRepo: TransactionRepo;
  private userRepo: UserRepo;

  constructor() {
    this.transactionRepo = new TransactionRepo();
    this.userRepo = new UserRepo();
  }

  public async getTranasctionsByUserId(userId: number): Promise<TransactionDto[]> {
    const transactions: Transaction[] = await this.transactionRepo.getTranasctionsByUserId(userId);
    return transactions.map((transaction) => TransactionMap.toDto(transaction));
  }

  public async saveUniqueTransactions(transactionDtoList: TransactionDto[]) {
    const userId = 1;
    const user = await this.userRepo.getUserById(userId);
    const existingTransactionDtoList = await this.getTranasctionsByUserId(userId);

    const newUniqueTransactionDtoList: TransactionDto[] = transactionDtoList.filter((transaction) => {
      const alreadyExist = existingTransactionDtoList.filter(
        (existingTransaction) => {
          return existingTransaction.date.getTime() === transaction.date.getTime() &&
            existingTransaction.amount.toFixed(2) === transaction.amount.toFixed(2)
        }).length;

      return !alreadyExist;
    });

    if (!newUniqueTransactionDtoList.length) return [];

    const entities = newUniqueTransactionDtoList.map((transactionDto) => {
      let transaction = TransactionMap.toEntity(transactionDto);
      transaction.user = user;
      return transaction;
    });

    const savedTransactions = await this.transactionRepo.saveAllTransactions(entities);
    return savedTransactions.map((transaction) => TransactionMap.toDto(transaction));
  }
};

export default TransactionService;
