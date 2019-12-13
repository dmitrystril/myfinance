import React from 'react';
import { Table } from 'antd';

interface TransactionsTableProps {
  columns: any;
  dataSource: any;
  isLoading: boolean;
};

const TransactionsTable: React.FC<TransactionsTableProps> = (props: TransactionsTableProps) => {
  const {
    columns,
    dataSource,
    isLoading,
  } = props;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      size="small"
      pagination={false}
    ></Table>
  );
};

export default TransactionsTable;
