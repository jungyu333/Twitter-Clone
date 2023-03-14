import Tweets from 'components/home/Tweets';
import TweetDetailHeader from 'components/tweetDetail/TweetDetailHeader';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100vh;
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
        <TweetDetailHeader />
        <Tweets />
      </MainContainer>
    </Wrapper>
  );
}

export default TweetDetail;
