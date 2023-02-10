import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMainHeaderTabButton } from 'types/home';

const Tab = styled.span`
  display: flex;
  flex-direction: column;
  width: max-content;
  position: relative;
`;

const TabUnderBar = styled.span`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.contents};
  position: absolute;
  bottom: -100%;
  border-radius: 10px;
  margin-bottom: 1px;
`;

function MainHeaderTabButton({ href, text }: IMainHeaderTabButton) {
  return (
    <Link to={href}>
      <Tab>
        <span>{text}</span>
        <TabUnderBar />
      </Tab>
    </Link>
  );
}

export default MainHeaderTabButton;
