import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { Statistic } from 'antd';

import { AppState } from '../../redux/rootReducer';
import { getIncomeData } from '../../redux/feature/income/incomeSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import columns from '../common/TransactionsTable/columns';
import DATE_FORMAT from '../../../constant/DateFormat';
import DateSelect from '../common/DateRangeSelect';
import TransactionType from '../../../type/TransactionType';
import { getFilteredTransactions, getTotalAmount } from '../transactionUtil';

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
  const [totalIncome, setTotalIncome] = useState<number>(0);

  useEffect(() => {
    dispatch(getIncomeData());
  }, [dispatch]);

  const refreshDataSource = useCallback((transactions: TransactionType[]) => {
    const transactionDataSource = transactions.map(item => (
      {
        key: item.id,
        date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
        merchantCategory: item.mccDescription,
        description: item.description,
        amount: item.amount,
        currency: item.currency,
      }
    ));

    setDataSource(transactionDataSource);
  }, []);

  const refreshStatistics = (transactions: TransactionType[]) => {
    setTotalIncome(getTotalAmount(transactions));
  }

  useEffect(() => {
    refreshDataSource(incomeTransactions);
    refreshStatistics(incomeTransactions);
  }, [incomeTransactions, refreshDataSource]);

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      const filteredTransactions = getFilteredTransactions(incomeTransactions, dates[0].toDate(), dates[1].toDate());

      refreshDataSource(filteredTransactions);
      refreshStatistics(filteredTransactions);
    }
  }

  return (
<PageContainer header="Income">
      <TopPane>
        <DateSelect onChange={handleDateChange} />

        <StatisticsPane>
          <CustomStatistic
            title="Total Income: "
            value={totalIncome}
            precision={2}
            valueStyle={{color: "#85bb65", float: "right"}}
          />
        </StatisticsPane>
      </TopPane>

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
