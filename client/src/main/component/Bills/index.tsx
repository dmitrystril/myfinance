import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { Statistic } from 'antd';

import { AppState } from '../../redux/rootReducer';
import { getBillsData } from '../../redux/feature/bills/billsSlice';
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

const Bills: React.FC = () => {
  const dispatch = useDispatch();
  const billsTransactions = useSelector((state: AppState) => state.bills.billsTransactions);
  const isLoading = useSelector((state: AppState) => state.bills.isLoading);

  const [dataSource, setDataSource] = useState<IDataSourceItem[]>([]);
  const [totalBills, setTotalBills] = useState<number>(0);

  useEffect(() => {
    dispatch(getBillsData());
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
    setTotalBills(getTotalAmount(transactions));
  }

  useEffect(() => {
    refreshDataSource(billsTransactions);
    refreshStatistics(billsTransactions);
  }, [billsTransactions, refreshDataSource]);

  const handleDateChange = (dates: RangePickerValue, dateStrings: [string, string]) => {
    if (dates[0] && dates[1]) {
      const filteredTransactions = getFilteredTransactions(billsTransactions, dates[0].toDate(), dates[1].toDate());

      refreshDataSource(filteredTransactions);
      refreshStatistics(filteredTransactions);
    }
  }

  return (
<PageContainer header="Bills">
      <TopPane>
        <DateSelect onChange={handleDateChange} />

        <StatisticsPane>
          <CustomStatistic
            title="Total Bills: "
            value={totalBills}
            precision={2}
            valueStyle={{color: "#C21807", float: "right"}}
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

export default Bills;
