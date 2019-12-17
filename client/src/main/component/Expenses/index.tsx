import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { Statistic } from 'antd';

import { AppState } from '../../redux/rootReducer';
import { getExpensesData, setCategory } from '../../redux/feature/expenses/expensesSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import { getColumns } from './columns';
import DateSelect from '../common/DateRangeSelect';
import TransactionType from '../../../type/TransactionType';
import { getFilteredTransactions, getTotalAmount, getTotalCashback } from '../transactionUtil';
import CategoryEnum from '../common/CategoryEnum';

const TopPane = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatisticsPane = styled.div`
  display: flex;
  margin-bottom: 20px !important;
`;

const CustomStatistic = styled(Statistic)`
  margin-left: 50px !important;
`;

const Scrollable = styled.div`
  height: calc(100% - 80px);
  overflow-y: auto;
`;

interface IDataSourceItem {
  key: number;
  date: Date;
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
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [totalCashback, setTotalCashback] = useState<number>(0);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  const refreshDataSource = useCallback((transactions: TransactionType[]) => {
    const transactionDataSource = transactions.map(item => (
      {
        key: item.id,
        date: item.date,
        merchantCategory: item.mccDescription,
        description: item.description,
        amount: item.amount,
        currency: item.currency,
        cashback: item.cashback,
        category: item.category,
      }
    ));

    setDataSource(transactionDataSource);
  }, []);

  const refreshStatistics = (transactions: TransactionType[]) => {
    setTotalExpenses(getTotalAmount(transactions));
    setTotalCashback(getTotalCashback(transactions));
  }

  useEffect(() => {
    refreshDataSource(expensesTransactions);
    refreshStatistics(expensesTransactions);
  }, [expensesTransactions, refreshDataSource]);

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      const filteredTransactions = getFilteredTransactions(expensesTransactions, dates[0].toDate(), dates[1].toDate());

      refreshDataSource(filteredTransactions);
      refreshStatistics(filteredTransactions);
    }
  }

  const handleMarkAs = (transactionId: number, category: CategoryEnum) => {
    dispatch(setCategory(transactionId, category));
  }

  return (
    <PageContainer header="Expenses">
      <TopPane>
        <DateSelect onChange={handleDateChange} />

        <StatisticsPane>
          <CustomStatistic
            title="Total Expenses: "
            value={totalExpenses}
            precision={2}
            valueStyle={{color: "#C21807", float: "right"}}
          />
          <CustomStatistic
            title="Total Cashback: "
            value={totalCashback}
            precision={2}
            valueStyle={{color: "#85bb65", float: "right"}}
          />
        </StatisticsPane>
      </TopPane>

      <Scrollable>
        <TransactionsTable
          dataSource={dataSource}
          columns={getColumns(handleMarkAs)}
          isLoading={isLoading}
        />
      </Scrollable>
    </PageContainer>
  );
};

export default Expenses;
