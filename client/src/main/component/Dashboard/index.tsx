import React from 'react';
import styled from 'styled-components';

import PageContainer from '../common/PageContainer';

const MarkedList = styled.ul`
  list-style: lower-latin;
  padding-left: 30px;
`;

const Dashboard: React.FC = () => (
  <PageContainer header="Dashboard">
      <h2>TODO:</h2>
      <hr />
      <MarkedList>
        <li>Authentication (JWT)</li>
        <li>Dashboard</li>
        <li>Reports
        <MarkedList>
            <li>2 stacked bar chart showing expenses/income per month</li>
            <li>Pie chart showing 10 biggest expenses grouped by MCC </li>
            <li>Pie chart showing 10 biggest cashbacks grouped by MCC </li>
        </MarkedList>
        </li>
        <li>Settings</li>
        <li>Make app more responsible</li>
        <li>i18n</li>
        <li>Theming</li>
      </MarkedList>
  </PageContainer>
);

export default Dashboard;
