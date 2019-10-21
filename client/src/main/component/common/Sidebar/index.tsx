import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import Pages from '../../../../constant/Pages';
import SVG from '../../../resource/image/svg';
import SidebarItem from './SidebarItem';

const Root = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 80px;
  box-shadow: 1px 0 2px 2px #EDEDED;
  z-index: 1;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 100px;
`;

const TopItemWrapper = styled.div`

`;

const BottomItemWrapper = styled.div`
  margin-bottom: 20px;
`;

const Logo = styled(ReactSVG)`
  width: 100px;
`;

const Sidebar: React.FC = () => (
  <Root>
    <Logo src={SVG.sidebarLogo} />

    <SidebarItemWrapper>
      <TopItemWrapper>
        <SidebarItem
          title="Dashboard"
          link={Pages.DASHBOARD}
        />
        <SidebarItem
          title="Income"
          link={Pages.INCOME}
        />
        <SidebarItem
          title="Expenses"
          link={Pages.EXPENSES}
        />
        <SidebarItem
          title="Taxes"
          link={Pages.TAXES}
        />
      </TopItemWrapper>

      <BottomItemWrapper>
        <SidebarItem
          title="Upload"
          link={Pages.UPLOAD}
        />
        <SidebarItem
          title="Settings"
          link={Pages.SETTINGS}
        />
      </BottomItemWrapper>
    </SidebarItemWrapper>
  </Root>
);

export default Sidebar;
