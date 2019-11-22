import xlsx from 'node-xlsx';
import moment from 'moment';

import TransactionService from './TransactionService';
import TransactionDto from '../dto/TransactionDto';

class UploadService {
  private transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }

  public async addTransactionsFromFile(file: Express.Multer.File): Promise<TransactionDto[]> {
    const parsedTransactionRows = this.parseFile(file);
    const transactionDtoList = this.createTransactionDtoList(parsedTransactionRows);

    return this.transactionService.saveUniqueTransactions(transactionDtoList);
  };

  private parseFile(file: Express.Multer.File) {
    const workSheets = xlsx.parse(file.buffer);
    const transactionRows = workSheets[0].data;
    transactionRows.shift(); // remove header row

    return transactionRows;
  };

  private createTransactionDtoList(parsedTransactionRows: any) {
    return parsedTransactionRows.map((item: any) => (
      {
        date: moment(item[0], 'DD.MM.yyyy HH:mm:ss').toDate(),
        description: item[1],
        mcc: item[2],
        amount: item[3],
        currency: item[5],
        cashback: item[8],
      }
    ));
  }
};

export default UploadService;
