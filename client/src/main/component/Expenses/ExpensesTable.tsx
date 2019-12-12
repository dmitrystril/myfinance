import React from 'react';
import moment from 'moment';
import { Table } from 'antd';

import columns from './columns';
import TransactionType from '../../../type/TransactionType';
import DATE_FORMAT from '../../../constant/DateFormat';

interface ExpensesTableProps {
  transactions: TransactionType[];
  isLoading: boolean;
};

const ExpensesTable: React.FC<ExpensesTableProps> = (props: ExpensesTableProps) => {
  const {
    transactions,
    isLoading,
  } = props;

  const dataSource = transactions.map(item => (
    {
      key: item.id,
      date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
      merchantCategory: item.mccDescription,
      description: item.description,
      amount: item.amount,
      currency: item.currency,
      cashback: item.cashback,
    }
  ));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      size="small"
      pagination={false}
    />
  );
};

export default ExpensesTable;
