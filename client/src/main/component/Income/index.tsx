import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    refreshDataSource();
  }, [incomeTransactions]);

  const refreshDataSource = (dateFrom?: Date, dateTo?: Date) => {
    let transactions = incomeTransactions;

    if (dateFrom && dateTo) {
      const dateFromMs = dateFrom.getTime();
      const dateToMs = dateTo.getTime();
      transactions = transactions.filter((item) => {
        const itemMs = moment(item.date).toDate().getTime();
        return itemMs > dateFromMs && itemMs < dateToMs;
      })
    }

    setDataSource(
      transactions.map(item => (
        {
          key: item.id,
          date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
          merchantCategory: item.mccDescription,
          description: item.description,
          amount: item.amount,
          currency: item.currency,
        }
      ))
    );
  }

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
