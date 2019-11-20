import xlsx from 'node-xlsx';
import moment from 'moment';

import UserService from './UserService';
import TransactionService from './TransactionService';
import UserDto from '../dto/UserDto';

class UploadService {
  private userService: UserService;
  private transactionService: TransactionService;

  constructor() {
    this.userService = new UserService();
    this.transactionService = new TransactionService();
  }

  public async addTransactionsFromFile(file: Express.Multer.File): Promise<any> {
    const userDto = await this.userService.getUserById(1);

    const parsedTransactionRows = this.parseFile(file);
    const transactionDtoList = this.createTransactionDtoList(parsedTransactionRows, userDto);

    return this.transactionService.saveAll(transactionDtoList);
  };

  private parseFile(file: Express.Multer.File) {
    const workSheets = xlsx.parse(file.buffer);
    const transactionRows = workSheets[0].data;
    transactionRows.shift(); // remove header row

    return transactionRows;
  };

  private createTransactionDtoList(parsedTransactionRows: any, userDto: UserDto) {
    return parsedTransactionRows.map((item: any) => (
      {
        date: moment(item[0], 'DD.MM.yyyy HH:mm:ss').toDate(),
        description: item[1],
        mcc: item[2],
        amount: item[3],
        currency: item[5],
        cashback: item[8],
        user: userDto,
      }
    ));
  }
};

export default UploadService;
