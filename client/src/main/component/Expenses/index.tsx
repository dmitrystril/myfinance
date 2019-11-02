import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getExpensesData } from '../../redux/action/expenses/ExpensesActions';
import PageContainer from '../common/PageContainer';
import { AppState } from '../../redux/store';

const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state: AppState) => state.expenses.testData);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  return (
    <PageContainer>
      <p>{testData}<br />{" Expenses page ".repeat(3000)}</p>
    </PageContainer>
  );
};

export default Expenses;
