import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.div`
  letter-spacing: 0.05em;
`;

const selectedItemCss = css`
  ${Title} {
    color: #FFFFFF;
  }
`;

const Root = styled.div<{ selected: boolean }>`
  padding: 10px 20px;
  margin-bottom: 5px;
  background-color: ${({selected}) => (selected ? '#ADD8E6' : '#FFFFFF')};
  cursor: pointer;
  ${({ selected }) => !selected && css`
    &:hover {
      box-shadow:  1px 0px 0px 0px #ADD8E6;
      ${Title} {
        color: #ADD8E6;
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
