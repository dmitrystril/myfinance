import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { AppState } from '../../redux/rootReducer';
import { getIncomeData } from '../../redux/feature/income/incomeSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import columns from './columns';
import DATE_FORMAT from '../../../constant/DateFormat';

const Income: React.FC = () => {
  const dispatch = useDispatch();
  const incomeTransactions = useSelector((state: AppState) => state.income.incomeTransactions);
  const isLoading = useSelector((state: AppState) => state.income.isLoading);

  useEffect(() => {
    dispatch(getIncomeData());
  }, [dispatch]);

  const dataSource = incomeTransactions.map(item => (
    {
      key: item.id,
      date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
      merchantCategory: item.mccDescription,
      description: item.description,
      amount: item.amount,
      currency: item.currency,
    }
  ));

  return (
    <PageContainer header="Income">
      <TransactionsTable
        dataSource={dataSource}
        columns={columns}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default Income;
