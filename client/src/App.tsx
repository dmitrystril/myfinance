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
import Upload from './main/component/Upload';
import Login from './main/component/Login';
import Bills from './main/component/Bills';
import Reports from './main/component/Reports';

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const App: React.FC = () => (
  <Root>
    <Switch>
      <Route
        path={Pages.LOGIN}
        component={Login}
      />
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
        path={Pages.BILLS}
        component={Bills}
      />
      <Route
        path={Pages.REPORTS}
        component={Reports}
      />
      <Route
        path={Pages.UPLOAD}
        component={Upload}
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
