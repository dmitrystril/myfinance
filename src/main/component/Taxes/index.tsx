import React from 'react';
import styled from 'styled-components';

import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const Root = styled.div`
  display: flex;
`;

const MainPanel = styled.div`
  background-color: gray;
`;

const Taxes: React.FC = () => {
  return (
    <Root>
      <Sidebar />

      <MainPanel>
        <Header />
        <h3>Taxes page</h3>
      </MainPanel>
    </Root>
  );
}

export default Taxes;
