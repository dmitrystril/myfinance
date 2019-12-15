import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { RangePickerValue } from 'antd/lib/date-picker/interface';

import { AppState } from '../../redux/rootReducer';
import { getExpensesData } from '../../redux/feature/expenses/expensesSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import columns from './columns';
import DATE_FORMAT from '../../../constant/DateFormat';
import DateSelect from '../common/DateRangeSelect';
import getTransactionDataSource from '../transactionDataSource';
import TransactionType from '../../../type/TransactionType';

const Scrollable = styled.div`
  height: calc(100% - 52px);
  overflow-y: auto;
`;

interface IDataSourceItem {
  key: number;
  date: string;
  merchantCategory: string;
  description: string;
  amount: number;
  currency: string;
  cashback: number;
}

const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  const expensesTransactions = useSelector((state: AppState) => state.expenses.expensesTransactions);
  const isLoading = useSelector((state: AppState) => state.expenses.isLoading);

  const [dataSource, setDataSource] = useState<IDataSourceItem[]>([]);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  const refreshDataSource = useCallback((dateFrom?: Date, dateTo?: Date) => {
    const transactions = getTransactionDataSource(
      expensesTransactions,
      (item: TransactionType) => (
        {
          key: item.id,
          date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
          merchantCategory: item.mccDescription,
          description: item.description,
          amount: item.amount,
          currency: item.currency,
          cashback: item.cashback,
        }
      ),
      dateFrom,
      dateTo,
    );

    setDataSource(transactions);
  }, [expensesTransactions]);

  useEffect(() => {
    refreshDataSource();
  }, [expensesTransactions, refreshDataSource]);

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      refreshDataSource(dates[0].toDate(), dates[1].toDate());
    }
  }

  return (
    <PageContainer header="Expenses">
      <DateSelect onChange={handleDateChange} />

      <Scrollable>
        <TransactionsTable
          dataSource={dataSource}
          columns={columns}
          isLoading={isLoading}
        />
      </Scrollable>
    </PageContainer>
  );
};

export default Expenses;
