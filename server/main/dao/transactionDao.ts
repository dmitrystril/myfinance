var format = require('pg-format');

var pool = require('../db.ts');

const dao = {
  saveAll: function(transactionVOList) {
    const values = transactionVOList.reduce((acc, currValue) => {
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

module.exports = dao;
