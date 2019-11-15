import format from 'pg-format';

import pool from '../db';

const transactionDao = {
  saveAll: function(transactionVOList: any) {
    const values = transactionVOList.reduce((acc: any, currValue: any) => {
      const {
        transactionDate,
        description,
        mcc,
        amount,
        currency,
        cashback,
      } = currValue;

      acc.push([transactionDate, description, mcc, amount, currency, cashback, 1]);
      return acc;
    }, []);

    const batchInsertQuery = format(
      `INSERT INTO transaction (
        transaction_date,
        description,
        mcc,
        amount,
        currency,
        cashback,
        user_id
      ) VALUES %L`,
      values,
    );

    pool.query(batchInsertQuery);
  },
};

export default transactionDao;
