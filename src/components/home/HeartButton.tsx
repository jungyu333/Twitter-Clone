import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.heart};
    & span {
      color: ${({ theme }) => theme.colors.heart};
    }
  }
  & span {
    margin-left: 10px;
    line-height: 2;
    font-size: 0.8rem;
  }
`;

function HeartButton() {
  return (
    <Button>
      <AiOutlineHeart />
      <span>23</span>
    </Button>
  );
}

export default HeartButton;
