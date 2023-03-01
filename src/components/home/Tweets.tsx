import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadTweets } from 'redux/action/tweet';
import { RootState, useAppDispatch } from 'redux/store';
import TweetCard from './TweetCard';

function Tweets() {
  const dispatch = useAppDispatch();
  const { tweets } = useSelector((state: RootState) => state.tweet);
  useEffect(() => {
    dispatch(loadTweets());
  }, []);
  return (
    <div>
      {tweets.map((tweet, index) => (
        <TweetCard />
      ))}
    </div>
  );
}

export default Tweets;
