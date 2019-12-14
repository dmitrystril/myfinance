import React from 'react';
import styled from 'styled-components';

import Sidebar from './navigation/Sidebar';
import Header from './Header';

const Root = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
`;

const MainPanel = styled.div`
  background-color: #F2F2F2;
  width: 100%;
`;

const Content = styled.div`
  margin: 20px 20px 0 20px;
  padding: 20px 20px 0 20px;
  background-color: white;
  height: calc(100% - 63px);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

interface PageContainerProps {
  header: string;
  children?: any;
};

const PageContainer: React.FC<PageContainerProps> = (props: PageContainerProps) => (
  <Root>
    <Sidebar />

    <MainPanel>
      <Header currentPage={props.header} />
      
      <Content>
        {props.children}
      </Content>
    </MainPanel>
  </Root>
);

export default PageContainer;
