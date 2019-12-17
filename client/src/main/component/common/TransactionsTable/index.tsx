import React from 'react';
import { Table } from 'antd';
import ExpandedRow from './ExpandedRow';

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

  const expandedRowRenderer = (record: any) => (
    <ExpandedRow record={record} />
  );

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      size="small"
      pagination={false}
      expandedRowRender={expandedRowRenderer}
    ></Table>
  );
};

export default TransactionsTable;
