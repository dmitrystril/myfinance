import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled.div`
  margin-bottom: 20px;
`;

interface SidebarItemProps {
  title: string;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, link }) => (
  <Root>
    <Link to={link}>{title}</Link>
  </Root>
);

export default SidebarItem;
