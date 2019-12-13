import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { AppState } from '../../redux/rootReducer';
import { getExpensesData } from '../../redux/feature/expenses/expensesSlice';
import PageContainer from '../common/PageContainer';
import TransactionsTable from '../common/TransactionsTable';
import columns from './columns';
import DATE_FORMAT from '../../../constant/DateFormat';

const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  const expensesTransactions = useSelector((state: AppState) => state.expenses.expensesTransactions);
  const isLoading = useSelector((state: AppState) => state.expenses.isLoading);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  const dataSource = expensesTransactions.map(item => (
    {
      key: item.id,
      date: moment(item.date).format(DATE_FORMAT.YYYY_MM_DD_HH_MM_SS),
      merchantCategory: item.mccDescription,
      description: item.description,
      amount: item.amount,
      currency: item.currency,
      cashback: item.cashback,
    }
  ));

  return (
    <PageContainer header="Expenses">
      <TransactionsTable
        dataSource={dataSource}
        columns={columns}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default Expenses;
