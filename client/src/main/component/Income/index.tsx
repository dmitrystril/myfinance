import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../redux/rootReducer';
import { getIncomeData } from '../../redux/feature/income/incomeSlice';
import PageContainer from '../common/PageContainer';

const Income: React.FC = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state: AppState) => state.income.testData);

  useEffect(() => {
    dispatch(getIncomeData());
  }, [dispatch]);

  return (
    <PageContainer header="Income">

    </PageContainer>
  );
};

export default Income;
