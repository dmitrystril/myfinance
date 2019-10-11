import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Pages from '../../../../constant/Pages';

const Root = styled.div`
  width: 300px;
  background-color: white;
`;

const Sidebar: React.FC = () => (
  <Root>
    <Link to={Pages.DASHBOARD}>Dashboard</Link>
    <Link to={Pages.INCOME}>Income</Link>
    <Link to={Pages.EXPENSES}>Expenses</Link>
    <Link to={Pages.TAXES}>Taxes</Link>
    <Link to={Pages.SETTINGS}>Settings</Link>
  </Root>
);

export default Sidebar;
