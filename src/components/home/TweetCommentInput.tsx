import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { createComment } from 'redux/action/comment';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { ITweetCommentInputProps } from 'types/home';

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & textarea {
    width: 100%;
    padding: 10px 5px;
    resize: none;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.2;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    :focus {
      outline-color: ${({ theme }) => theme.colors.lightcontents};
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CommentSubmitButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.lightcontents};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.contents};
  }
`;

function TweetCommentInput({ tweetId }: ITweetCommentInputProps) {
  const [commentText, setCommentText] = useState<string>('');
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.login);

  const onSubmitComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (commentText.length === 0) {
      return;
    } else {
      if (user) {
        const createdAt = Date.now();
        dispatch(
          createComment({
            tweetId: tweetId,
            userId: user.uid,
            createdAt: createdAt,
            text: commentText,
          }),
        );
      }
    }
    setCommentText('');
  };
  const onChangeCommentText = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setCommentText(text);
    },
    [],
  );

  return (
    <Wrapper onSubmit={onSubmitComment}>
      <textarea rows={2} value={commentText} onChange={onChangeCommentText} />
      <CommentSubmitButton>reply</CommentSubmitButton>
    </Wrapper>
  );
}

export default TweetCommentInput;
