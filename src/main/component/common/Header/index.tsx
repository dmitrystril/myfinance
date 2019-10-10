import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  background-color: lightgreen;
`;

const Header: React.FC = () => {
  return (
    <Root>
      <h3>Header</h3>
    </Root>
  );
}

export default Header;
