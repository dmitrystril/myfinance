var xlsx = require('node-xlsx').default;
var moment = require('moment');

var transactionDao = require('../dao/transactionDao.ts');

const service = {
  uploadStatementFile: function(file) {
    const parsedTransactionRows = this.parseFile(file);
    const transactionVOList = this.prepareTransactionVOList(parsedTransactionRows);

    transactionDao.saveAll(transactionVOList);
  },

  parseFile: function(file) {
    const workSheets = xlsx.parse(file.buffer);
	  const transactions = workSheets[0].data;
    transactions.shift(); // remove header row

    return transactions;
  },

  prepareTransactionVOList: function(transactionRows) {
    return transactionRows.map(item => (
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

module.exports = service;
