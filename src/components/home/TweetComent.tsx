import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & textarea {
    width: 100%;
    padding: 10px 5px;
    resize: none;
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

function TweetComent() {
  const [commentText, setCommentText] = useState<string>('');

  const onSubmitComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (commentText.length === 0) {
      return;
    } else {
      console.log(commentText);
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

export default TweetComent;
