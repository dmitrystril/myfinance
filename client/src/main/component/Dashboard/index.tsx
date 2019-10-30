import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTestApiData } from '../../redux/action/TestAction';
import { AppState } from '../../redux/store';
import PageContainer from '../common/PageContainer';

interface DashboardProps {
  testData: string | null,
  getTestApiData: typeof getTestApiData,
};

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const {
    testData,
    getTestApiData,
  } = props;

  useEffect(() => {
    getTestApiData();
  }, [getTestApiData]);

  return (
    <PageContainer>
      <p>{testData}<br />{" Dashboard page ".repeat(3000)}</p>
    </PageContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  testData: state.testData,
});

const mapDispatchToProps = {
  getTestApiData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
