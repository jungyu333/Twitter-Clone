import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadComments } from 'redux/action/comment';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { IComment, ITweet, ITweetCommentsProps } from 'types/home';

const Wrapper = styled.div`
  width: 100%;
`;

const Avater = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  min-width: 40px;
`;

const CommentsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  &:last-child {
    border: none;
  }
`;

const Comment = styled.div`
  width: 100%;
  margin: 5px 0px 5px 20px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.7rem;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  & h1 {
    font-weight: 600;
    font-size: 0.9rem;
    margin-right: 5px;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8rem;
  }
`;

const Text = styled.div`
  max-width: 500px;
  word-break: break-all;
  margin-top: 10px;
`;

function TweetComments({ tweetId }: ITweetCommentsProps) {
  const dispatch = useAppDispatch();
  const [clickTweet, setClickTweet] = useState<ITweet | null>(null);
  const { tweets, commentsLoadDone } = useSelector(
    (state: RootState) => state.tweet,
  );

  useEffect(() => {
    dispatch(loadComments(tweetId));
  }, []);

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
      {clickTweet &&
        clickTweet.comments &&
        clickTweet.comments.map((comment: IComment) => (
          <CommentsContainer key={comment.id}>
            <Avater src={comment.avatar} />
            <Comment>
              <CommentHeader>
                <HeaderInfo>
                  <h1>{comment.name}</h1>
                  <h2>{comment.email}</h2>
                </HeaderInfo>

                <span>{comment.createdAt}</span>
              </CommentHeader>
              <Text>{comment.text}</Text>
            </Comment>
          </CommentsContainer>
        ))}
    </Wrapper>
  );
}

export default TweetComments;
