import React from 'react';
import { ITweetsProps } from 'types/home';
import TweetCard from './TweetCard';

function Tweets({ tweetsData }: ITweetsProps) {
  return (
    <div>
      {tweetsData.map((tweet, index) => (
        <TweetCard tweetData={tweet} key={index} />
      ))}
    </div>
  );
}

export default Tweets;
