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
    <Link to={Pages.DASHBOARD}>Dashboard</Link><br/>
    <Link to={Pages.INCOME}>Income</Link><br/>
    <Link to={Pages.EXPENSES}>Expenses</Link><br/>
    <Link to={Pages.TAXES}>Taxes</Link><br/>
    <Link to={Pages.SETTINGS}>Settings</Link><br/>
  </Root>
);

export default Sidebar;
