import xlsx from 'node-xlsx';
import moment from 'moment';

import transactionDao from '../dao/transactionDao';

const uploadService = {
  uploadStatementFile: function(file: any) {
    const parsedTransactionRows = this.parseFile(file);
    const transactionVOList = this.prepareTransactionVOList(parsedTransactionRows);

    transactionDao.saveAll(transactionVOList);
  },

  parseFile: function(file: any) {
    const workSheets = xlsx.parse(file.buffer);
	  const transactions = workSheets[0].data;
    transactions.shift(); // remove header row

    return transactions;
  },

  prepareTransactionVOList: function(transactionRows: any) {
    return transactionRows.map((item: any) => (
      {
        transactionDate: moment.utc(item[0], 'dd.MM.yyyy HH:mm:ss').toDate(),
        description: item[1],
        mcc: item[2],
        amount: item[3],
        currency: item[5],
        cashback: item[8],
      }
    ));
  }
};

export default uploadService;
