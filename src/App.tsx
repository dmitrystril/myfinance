import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './main/component/Dashboard';
import Income from './main/component/Income';
import Expenses from './main/component/Expenses';
import Taxes from './main/component/Taxes';
import Settings from './main/component/Settings';
import Pages from './constant/Pages';

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => (
  <Root>
    <Switch>
      <Route
        path={Pages.DASHBOARD}
        component={Dashboard}
      />
      <Route
        path={Pages.INCOME}
        component={Income}
      />
      <Route
        path={Pages.EXPENSES}
        component={Expenses}
      />
      <Route
        path={Pages.TAXES}
        component={Taxes}
      />
      <Route
        path={Pages.SETTINGS}
        component={Settings}
      />
      <Redirect
        from="/**"
        to={Pages.DASHBOARD}
      />
    </Switch>
  </Root>
);

export default App;
