import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIncomeData } from '../../redux/action/income/IncomeActions';
import PageContainer from '../common/PageContainer';
import { AppState } from '../../redux/store';

const Income: React.FC = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state: AppState) => state.income.testData);

  useEffect(() => {
    dispatch(getIncomeData());
  }, [dispatch]);

  return (
    <PageContainer>
      <p>{testData}<br />{" Income page ".repeat(3000)}</p>
    </PageContainer>
  );
};

export default Income;
