import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const Root = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
`;

const MainPanel = styled.div`
  background-color: #F2F2F2;
  width: 100%;
`;

const Content = styled.div<{heightSubtrahend: number}>`
  margin: 30px 20px 0 30px;
  padding: 20px 20px 0 20px;
  background-color: white;
  height: calc(100% - 30px - ${props => props.heightSubtrahend}px);
  overflow-y: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Dashboard: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (headerRef && headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerHeight]);

  return (
    <Root>
      <Sidebar />

      <MainPanel>
        <Header ref={headerRef} />

        <Content heightSubtrahend={headerHeight}>
          <p>{" tl dr".repeat(3000)}</p>
        </Content>
      </MainPanel>
    </Root>
  );
};

export default Dashboard;
