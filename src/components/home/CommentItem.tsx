import React from 'react';
import styled from 'styled-components';
import { IComment } from 'types/home';

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

function CommentItem(props: IComment) {
  const { id, avatar, name, email, createdAt, text } = props;
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <CommentsContainer key={id}>
      <Avater src={avatar} />
      <Comment>
        <CommentHeader>
          <HeaderInfo>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </HeaderInfo>

          <span>{date}</span>
        </CommentHeader>
        <Text>{text}</Text>
      </Comment>
    </CommentsContainer>
  );
}

export default CommentItem;
