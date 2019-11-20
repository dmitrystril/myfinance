import TransactionRepo from '../repository/TransactionRepo';
import TransactionDto from '../dto/TransactionDto';

class TransactionService {
  public saveAll(transactionDtoList: TransactionDto[]) {
    return new TransactionRepo().saveAllTransactions(transactionDtoList);
  }
};

export default TransactionService;
