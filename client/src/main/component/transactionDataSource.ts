import moment from 'moment';

import TransactionType from "../../type/TransactionType";

const getTransactionDataSource = (
  transactions: TransactionType[],
  mapFunction: Function,
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

    return transactions.map(item => mapFunction(item));
};

export default getTransactionDataSource;
