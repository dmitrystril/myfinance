import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { RangePickerValue } from 'antd/lib/date-picker/interface';

import { AppState } from '../../redux/rootReducer';
import { getIncomeData } from '../../redux/feature/income/incomeSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import columns from './columns';
import DATE_FORMAT from '../../../constant/DateFormat';
import DateSelect from '../common/DateRangeSelect';
import TransactionType from '../../../type/TransactionType';
import getTransactionDataSource from '../transactionDataSource';

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
}

const Income: React.FC = () => {
  const dispatch = useDispatch();
  const incomeTransactions = useSelector((state: AppState) => state.income.incomeTransactions);
  const isLoading = useSelector((state: AppState) => state.income.isLoading);

  const [dataSource, setDataSource] = useState<IDataSourceItem[]>([]);

  useEffect(() => {
    dispatch(getIncomeData());
  }, [dispatch]);

  const refreshDataSource = useCallback((dateFrom?: Date, dateTo?: Date) => {
    const transactions = getTransactionDataSource(
      incomeTransactions,
      (item: TransactionType) => (
        {
          key: item.id,
          date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
          merchantCategory: item.mccDescription,
          description: item.description,
          amount: item.amount,
          currency: item.currency,
        }
      ),
      dateFrom,
      dateTo,
    );

    setDataSource(transactions);
  }, [incomeTransactions]);

  useEffect(() => {
    refreshDataSource();
  }, [incomeTransactions, refreshDataSource]);

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      refreshDataSource(dates[0].toDate(), dates[1].toDate());
    }
  }

  return (
    <PageContainer header="Income">
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

export default Income;
