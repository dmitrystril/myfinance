import xlsx from 'node-xlsx';
import moment from 'moment';

import transactionDao from '../dao/transactionDao';
import userService from './userService';
import { Transaction } from '../model/Transaction';

const uploadService = {
  uploadStatementFile: async function(file: Express.Multer.File) {
    const user = await userService.getUserById(1);

    const parsedTransactionRows = this.parseFile(file);
    const transactionVOList = this.prepareTransactionVOList(parsedTransactionRows, user);

    // TODO: transform here
    transactionDao.saveAll(transactionVOList);
  },

  parseFile: function(file: Express.Multer.File) {
    const workSheets = xlsx.parse(file.buffer);
	  const transactionRows = workSheets[0].data;
    transactionRows.shift(); // remove header row

    return transactionRows;
  },

  prepareTransactionVOList: function(parsedTransactionRows: any, user) {
    return parsedTransactionRows.map((item: any) => {
      let transaction = new Transaction();

      transaction.date = moment.utc(item[0], 'dd.MM.yyyy HH:mm:ss').toDate();
      transaction.description = item[1];
      transaction.mcc = item[2];
      transaction.amount = item[3];
      transaction.currency = item[5];
      transaction.cashback = item[8];
      transaction.user = user;

      return transaction;
    });
  }
};

export default uploadService;
