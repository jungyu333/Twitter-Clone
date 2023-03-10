import Logo from 'components/common/Logo';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/action/logIn';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.logoutgray};
`;

const LogOutContainer = styled.div`
  width: 320px;
  height: 360px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  line-height: 1.1;
  & h1 {
    font-weight: 900;
    font-size: 1.2rem;
  }

  & p {
    margin-top: 10px;
    line-height: 1.3;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  & button {
    cursor: pointer;
    width: 100%;
    height: 45px;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    margin: 5px 0;
    font-weight: 600;
    font-size: 1rem;

    &:first-child {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const LogOutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

function LogOut() {
  const { logOutDone } = useSelector((state: RootState) => state.login);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const onClickCancel = () => {
    navigation('/home', { replace: true });
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    if (logOutDone) {
      navigation('/', { replace: true });
    }
  }, [logOutDone]);
  return (
    <Wrapper>
      <LogOutContainer>
        <Logo />
        <TextContainer>
          <h1>??????????????? ???????????????????????????????</h1>
          <p>
            ???????????? ?????? ???????????? ??? ????????????. ????????? ??????????????? ?????? ??????
            ????????? ???????????? ????????? ??? ????????????.
          </p>
        </TextContainer>
        <ButtonContainer>
          <LogOutButton onClick={onClickLogOut}>?????? ??????</LogOutButton>
          <CancelButton onClick={onClickCancel}>??????</CancelButton>
        </ButtonContainer>
      </LogOutContainer>
    </Wrapper>
  );
}

export default LogOut;
