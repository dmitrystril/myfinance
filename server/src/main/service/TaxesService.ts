import TaxesRepo from "../repository/TaxesRepo";
import TransactionDto from "../dto/TransactionDto";
import TransactionMap from "../dto/mapper/TransactionMap";

class TaxesService {
  private taxesRepo: TaxesRepo;

  constructor() {
    this.taxesRepo = new TaxesRepo();
  }

  public async getTaxesTransactionDtoList(): Promise<TransactionDto[]> {
    const taxesTransactionList = await this.taxesRepo.getTaxesTransactions();
    return taxesTransactionList.map(taxesTransaction => TransactionMap.toDto(taxesTransaction));
  }
};

export default TaxesService;
