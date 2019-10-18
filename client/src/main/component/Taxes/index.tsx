import React from 'react';
import styled from 'styled-components';

import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const Root = styled.div`
  display: flex;
  width: 100%;
`;

const MainPanel = styled.div`
  background-color: gray;
  width: 100%;
`;

const Taxes: React.FC = () => (
  <Root>
    <Sidebar />

    <MainPanel>
      <Header />
      <h3>Taxes page</h3>
    </MainPanel>
  </Root>
);

export default Taxes;
