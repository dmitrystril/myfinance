import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Sidebar from '../common/navigation/Sidebar';
import Header from '../common/Header';
import { getTestApiData } from '../../redux/action/TestAction';
import { AppState } from '../../redux/store';

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

interface DashboardProps {
  testData: string,
  getTestApiData: typeof getTestApiData,
};

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (headerRef && headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerHeight]);

  const {
    testData,
    getTestApiData,
  } = props;

  useEffect(() => {
    getTestApiData();
  }, [getTestApiData]);

  return (
    <Root>
      <Sidebar />

      <MainPanel>
        <Header ref={headerRef} />

        <Content heightSubtrahend={headerHeight}>
          <p>{testData}<br />{" tl dr".repeat(3000)}</p>
        </Content>
      </MainPanel>
    </Root>
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
