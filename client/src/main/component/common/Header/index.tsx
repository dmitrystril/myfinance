import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background-color: white;
  box-shadow: 5px 1px 1px 1px #EDEDED;
  color: #40a9ff;
  user-select: none;
`;

interface HeaderProps {
  currentPage: string;
  ref?: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = forwardRef((props, ref) => (
  <Root ref={ref} >
    <div>Dmitry Stril &#x27B2; {props.currentPage}</div>
  </Root>
));

export default Header;
