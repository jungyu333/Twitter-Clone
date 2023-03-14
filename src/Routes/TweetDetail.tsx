import Tweets from 'components/home/Tweets';
import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100vh;
`;

const TweetDetailHeader = styled.header`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.85;
  backdrop-filter: blur(12px);

  & h1 {
    width: 100%;
    font-weight: 600;
    font-size: 19px;
    display: flex;
    align-items: center;
  }
`;

const BackButton = styled.div`
  min-width: 56px;
  min-height: 32px;

  & button {
    min-height: 36px;
    min-width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transition: 0.2s ease-in-out;
      background-color: ${({ theme }) => theme.colors.lightgray};
    }

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const MainContainer = styled.div`
  width: 550px;
  height: max-content;
  border-left: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

function TweetDetail() {
  return (
    <Wrapper>
      <MainContainer>
        <TweetDetailHeader>
          <BackButton>
            <button>
              <MdKeyboardBackspace />
            </button>
          </BackButton>
          <h1>Tweet</h1>
        </TweetDetailHeader>
        <Tweets />
      </MainContainer>
    </Wrapper>
  );
}

export default TweetDetail;
