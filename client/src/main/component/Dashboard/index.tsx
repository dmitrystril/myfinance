import React from 'react';

import PageContainer from '../common/PageContainer';

const Dashboard: React.FC = () => (
  <PageContainer header="Dashboard">
    <div>Date range picker <br/></div>
    <div>Total income: 123123</div>
    <div>Total expenses: 4212</div>

    <div>Bar graph income/expenses per month</div>
    <div>2 Pie graphs showing biggest expenses mcc + cashback / income mcc </div>
  </PageContainer>
);

export default Dashboard;
