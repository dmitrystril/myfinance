import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.div`

`;

const selectedItemCss = css`
  ${Title} {
    color: #FFFFFF;
  }
`;

const Root = styled.div<{ selected: boolean }>`
  padding: 10px 20px;
  margin-bottom: 8px;
  border-radius: 3px;
  user-select: none;
  background-color: ${({selected}) => (selected ? '#121E39' : '#8994AC')};
  /* box-shadow: 1px 1px 1px lightgray; */
  cursor: pointer;
  ${({ selected }) => !selected && css`
    &:hover {
      box-shadow:  1px 0px 1px 0px #DCDCDC;
      ${Title} {
        color: #FFFFFF;
      }
    }
  `};
  ${props => props.selected && selectedItemCss}
`;

interface SidebarItemProps {
  title: string;
  link: string;
  selected: boolean;
  onClick: (path: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = (props: SidebarItemProps) => {
  const {
    title,
    link,
    selected,
    onClick,
  } = props;

  return (
    <Root
      onClick={() => onClick(link)}
      selected={selected}
    >
      <Title>{title}</Title>
    </Root>
  );
}

export default SidebarItem;
