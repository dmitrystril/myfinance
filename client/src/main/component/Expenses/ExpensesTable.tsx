import React from 'react';
import moment from 'moment';
import { Table } from 'antd';

import TransactionType from '../../../type/TransactionType';

interface ExpensesTableProps {
  transactions: TransactionType[];
  isLoading: boolean;
};

const ExpensesTable: React.FC<ExpensesTableProps> = (props: ExpensesTableProps) => {
  const {
    transactions,
    isLoading,
  } = props;

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 200,
    },
    {
      title: 'Merchant category ',
      dataIndex: 'merchantCategory',
      key: 'merchantCategory',
      ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      width: 100,
    },
    {
      title: 'Cashback',
      dataIndex: 'cashback',
      key: 'cashback',
      width: 100,
    },
  ];

  const dataSource = transactions.map(item => (
    {
      key: item.id,
      date: moment(item.date).format('YYYY-mm-DD HH:mm:ss'),
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
