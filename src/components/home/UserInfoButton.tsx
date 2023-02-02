import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 13px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const Avatar = styled.div`
  background-color: gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const InfoContainer = styled.div`
  text-align: start;
  max-width: 100%;
  margin: 0 12px;
  & h1 {
    font-weight: 600;
    font-size: 1rem;
  }
  & span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textgray};
  }
`;

function UserInfoButton() {
  return (
    <Wrapper>
      <Avatar />
      <InfoContainer>
        <h1>이름</h1>
        <span>jungyu3826@naver.com</span>
      </InfoContainer>
      <MdMoreVert />
    </Wrapper>
  );
}

export default UserInfoButton;
