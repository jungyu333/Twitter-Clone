import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { IUserInfoModalButton } from 'types/home';

const ButtonContainer = styled.div`
  width: 100%;
  font-size: 0.9rem;
  cursor: pointer;
  height: max-content;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }

  & h1 {
    margin-right: 8px;
  }

  & span {
    font-weight: 600;
    opacity: 0.5;
  }
`;

function UserInfoModalButton({ text, href }: IUserInfoModalButton) {
  const { user } = useSelector((state: RootState) => state.login);
  return (
    <Link to={href}>
      <ButtonContainer>
        <h1>{text}</h1>
        <span>{user?.email}</span>
      </ButtonContainer>
    </Link>
  );
}

export default UserInfoModalButton;
