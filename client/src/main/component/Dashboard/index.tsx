import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getTestApiData } from '../../redux/action/TestAction';
import { AppState } from '../../redux/store';
import PageContainer from '../common/PageContainer';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state: AppState) => state.testData);

  useEffect(() => {
    dispatch(getTestApiData());
  }, [dispatch]);

  return (
    <PageContainer>
      <p>{testData}<br />{" Dashboard page ".repeat(3000)}</p>
    </PageContainer>
  );
};

export default Dashboard;
