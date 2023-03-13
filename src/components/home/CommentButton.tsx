import React, { useCallback } from 'react';
import { MdOutlineModeComment } from 'react-icons/md';
import styled from 'styled-components';
import { ICommentButtonProps } from 'types/home';

const Button = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.contents};
    & span {
      color: ${({ theme }) => theme.colors.contents};
    }
  }
  & span {
    margin-left: 10px;
    line-height: 2;
    font-size: 0.8rem;
  }
`;

function CommentButton({ setIsCommentOpen, commentsNum }: ICommentButtonProps) {
  const onClickComment = useCallback(() => {
    setIsCommentOpen((prev: boolean) => !prev);
  }, []);

  return (
    <Button onClick={onClickComment}>
      <MdOutlineModeComment />
      <span>{commentsNum}</span>
    </Button>
  );
}

export default CommentButton;
