import React from 'react';
import { MdOutlineModeComment } from 'react-icons/md';
import styled from 'styled-components';

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

function CommentButton() {
  return (
    <Button>
      <MdOutlineModeComment />
      <span>1</span>
    </Button>
  );
}

export default CommentButton;
