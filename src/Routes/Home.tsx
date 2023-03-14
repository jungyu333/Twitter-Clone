import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainHeader from 'components/home/MainHeader';
import TweetInput from 'components/home/TweetInput';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'redux/store';
import Tweets from 'components/home/Tweets';
import { resetTweets } from 'redux/reducer/tweet';
import { loadTweets } from 'redux/action/tweet';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
`;

const MainContainer = styled.div`
  width: 550px;
  height: max-content;
  border-left: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

function Home() {
  const { tweets } = useSelector((state: RootState) => state.tweet);
  const { logInDone } = useSelector((state: RootState) => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (logInDone) {
      dispatch(resetTweets());
    }
  }, [logInDone]);

  useEffect(() => {
    dispatch(loadTweets());
  }, []);

  return (
    <Wrapper>
      <Main>
        <MainContainer>
          <MainHeader />
          <TweetInput />
          <Tweets tweetsData={tweets} />
        </MainContainer>
      </Main>
    </Wrapper>
  );
}
export default Home;
