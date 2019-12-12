import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../redux/rootReducer';
import { getExpensesData } from '../../redux/feature/expenses/expensesSlice';
import PageContainer from '../common/PageContainer';
import ExpensesTable from './ExpensesTable';

const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  const expensesTransactions = useSelector((state: AppState) => state.expenses.expensesTransactions);
  const isLoading = useSelector((state: AppState) => state.expenses.isLoading);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  return (
    <PageContainer header="Expenses">
      <ExpensesTable
        transactions={expensesTransactions}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default Expenses;
