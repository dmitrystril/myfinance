import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../redux/rootReducer';
import { getExpensesData } from '../../redux/feature/expenses/expensesSlice';
import PageContainer from '../common/PageContainer';

const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state: AppState) => state.expenses.testData);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  return (
    <PageContainer header="Expenses">

    </PageContainer>
  );
};

export default Expenses;
