import React, { useEffect } from 'react';
import { loadComments } from 'redux/action/comment';
import { useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { ITweetCommentsProps } from 'types/home';

const Wrapper = styled.div`
  width: 100%;
`;

const Avater = styled.div`
  background-color: gray;
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
  margin-top: 5px;
`;

function TweetComments({ tweetId }: ITweetCommentsProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadComments(tweetId));
  }, []);
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((item) => (
        <CommentsContainer>
          <Avater />
          <Comment>
            <CommentHeader>
              <HeaderInfo>
                <h1>이름</h1>
                <h2>이메일</h2>
              </HeaderInfo>

              <span>날짜</span>
            </CommentHeader>
            <Text>text</Text>
          </Comment>
        </CommentsContainer>
      ))}
    </Wrapper>
  );
}

export default TweetComments;
