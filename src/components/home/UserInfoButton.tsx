import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
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

const Avatar = styled.img`
  border-radius: 50%;
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
  const { user } = useSelector((state: RootState) => state.login);
  return (
    <Wrapper>
      <Avatar src={process.env.REACT_APP_DEFAULT_AVATAR} />
      <InfoContainer>
        <h1>{user?.name}</h1>
        <span>{user?.email}</span>
      </InfoContainer>
      <MdMoreVert />
    </Wrapper>
  );
}

export default UserInfoButton;
