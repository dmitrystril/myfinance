import BillsRepo from "../repository/BillsRepo";
import TransactionDto from "../dto/TransactionDto";
import TransactionMap from "../dto/mapper/TransactionMap";

class BillsService {
  private billsRepo: BillsRepo;

  constructor() {
    this.billsRepo = new BillsRepo();
  }

  public async getBillsTransactionDtoList(): Promise<TransactionDto[]> {
    const billsTransactionList = await this.billsRepo.getBillsTransactionDtoList();
    return billsTransactionList.map(billsTransaction => TransactionMap.toDto(billsTransaction));
  }
};

export default BillsService;
