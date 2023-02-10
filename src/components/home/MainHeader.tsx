import React from 'react';
import styled from 'styled-components';
import MainHeaderTabButton from './MainHeaderTabButton';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  & h1 {
    font-weight: 800;
    font-size: 1.3rem;
    width: 100%;
    height: 50%;
    padding: 10px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  height: 50%;
  & a {
    font-weight: 600;
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgray};
    }
  }
`;

function MainHeader() {
  return (
    <Wrapper>
      <h1>홈</h1>
      <TabContainer>
        <MainHeaderTabButton href="/home" text="For you" />
        <MainHeaderTabButton href="/home" text="Following" />
      </TabContainer>
    </Wrapper>
  );
}

export default MainHeader;
