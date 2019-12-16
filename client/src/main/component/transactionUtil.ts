import moment from 'moment';

import TransactionType from "../../type/TransactionType";

const getFilteredTransactions = (
  transactions: TransactionType[],
  dateFrom?: Date,
  dateTo?: Date
) => {
  if (dateFrom && dateTo) {
    const dateFromMs = dateFrom.getTime();
    const dateToMs = dateTo.getTime();
    transactions = transactions.filter((item) => {
      const itemMs = moment(item.date).toDate().getTime();
      return itemMs > dateFromMs && itemMs < dateToMs;
    })
  }

  return transactions;
};

const getTotalAmount = (transactions: TransactionType[]) => {
  return transactions.reduce((sum: number, nextTransaction: TransactionType) => {
    return sum + nextTransaction.amount;
  }, 0);
}

const getTotalCashback = (transactions: TransactionType[]) => {
  return transactions.reduce((sum: number, nextTransaction: TransactionType) => {
    return sum + nextTransaction.cashback;
  }, 0);
}

export {
  getFilteredTransactions,
  getTotalAmount,
  getTotalCashback,
};
