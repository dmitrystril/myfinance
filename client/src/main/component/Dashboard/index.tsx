import React, { useEffect, useState } from 'react';
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

const Dashboard: React.FC = () => {
  const [ apiResponse, setApiResponse ] = useState();

  const fetchApi = async () => {
    const response = await fetch("/api/testAPI")
    setApiResponse(await response.json());
  };

  useEffect( () => {
    fetchApi()
  }, [ apiResponse ]
 );

  return (
    <Root>
      <Sidebar />

      <MainPanel>
        <Header />
        <h3>Dashboard page</h3>
        <p>API response: {apiResponse}</p>
      </MainPanel>
    </Root>
  );
};

export default Dashboard;
