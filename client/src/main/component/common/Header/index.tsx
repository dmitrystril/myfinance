import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 30px;
  background-color: white;
  box-shadow: 5px 1px 1px 1px #EDEDED;
`;

interface HeaderProps {
  ref?: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = forwardRef((props, ref) => (
  <Root ref={ref} >
    <h3>Header</h3>
  </Root>
));

export default Header;
