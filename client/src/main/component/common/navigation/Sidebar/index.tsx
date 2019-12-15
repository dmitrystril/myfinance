import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router';
import { History } from 'history';

import Pages from '../../../../../constant/Pages';
import SVG from '../../../../resource/image/svg';
import SidebarItem from './SidebarItem';

const Root = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 50px;
  box-shadow: 1px 0 2px 2px #EDEDED;
  z-index: 1;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 50px;
`;

const TopItemWrapper = styled.div`

`;

const BottomItemWrapper = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled(ReactSVG)`
  width: 140px;
`;

interface SidebarProps {
  history : History,
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const {
    history,
    history: { location }
  } = props;

  const onItemClick = (path: string) => {
    history.push(path);
  };

  return (
    <Root>
      <Logo src={SVG.sidebarLogo} />

      <SidebarItemWrapper>
        <TopItemWrapper>
          <SidebarItem
            title="Dashboard"
            link={Pages.DASHBOARD}
            selected={location.pathname === Pages.DASHBOARD}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Income"
            link={Pages.INCOME}
            selected={location.pathname === Pages.INCOME}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Expenses"
            link={Pages.EXPENSES}
            selected={location.pathname === Pages.EXPENSES}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Taxes"
            link={Pages.TAXES}
            selected={location.pathname === Pages.TAXES}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Bills"
            link={Pages.BILLS}
            selected={location.pathname === Pages.BILLS}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Reports"
            link={Pages.REPORTS}
            selected={location.pathname === Pages.REPORTS}
            onClick={onItemClick}
          />
        </TopItemWrapper>

        <BottomItemWrapper>
          <SidebarItem
            title="Upload"
            link={Pages.UPLOAD}
            selected={location.pathname === Pages.UPLOAD}
            onClick={onItemClick}
          />
          <SidebarItem
            title="Settings"
            link={Pages.SETTINGS}
            selected={location.pathname === Pages.SETTINGS}
            onClick={onItemClick}
          />
        </BottomItemWrapper>
      </SidebarItemWrapper>
    </Root>
  )
};

export default withRouter(Sidebar);
