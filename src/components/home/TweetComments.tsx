import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { IComment, ITweet, ITweetCommentsProps } from 'types/home';
import CommentItem from './CommentItem';

const Wrapper = styled.div`
  width: 100%;
`;

function TweetComments({ tweetId }: ITweetCommentsProps) {
  const [clickTweet, setClickTweet] = useState<ITweet | null>(null);
  const { tweets, commentsLoadDone } = useSelector(
    (state: RootState) => state.tweet,
  );

  useEffect(() => {
    if (commentsLoadDone) {
      const tweet = tweets.find((tweet) => {
        return tweet.id === tweetId;
      });
      if (tweet) {
        setClickTweet(tweet);
      }
    }
  }, [commentsLoadDone]);

  return (
    <Wrapper>
      {/* {clickTweet &&
        clickTweet.comments &&
        clickTweet.comments.map((comment: IComment) => (
          <CommentItem key={comment.id} {...comment} />
        ))} */}
    </Wrapper>
  );
}

export default TweetComments;
