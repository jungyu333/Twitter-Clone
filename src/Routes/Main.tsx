import SignUpModal from 'components/main/SignUpModal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineGoogle } from 'react-icons/ai';
import { RootState, useAppDispatch } from 'redux/store';
import { googleLogIn } from 'redux/action/logIn';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from 'components/common/Logo';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MainImage = styled.img`
  width: 60vw;
  height: 100vh;
  min-width: 1000px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 40vw;
  min-width: 200px;
  margin-left: 70px;
  margin-bottom: 150px;
  min-width: max-content;

  & h1 {
    font-size: 4rem;
    font-weight: 900;
    margin: 50px 0;
    margin-top: 100px;
  }

  & h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 20px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  min-width: max-content;
  margin-top: 60px;

  & button:first-child {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
  }

  & button:last-child {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;

const Button = styled.button`
  margin: 12px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.contents};
  padding: 15px 5px;
  width: 100%;
  min-width: max-content;
  border-radius: 30px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  font-weight: 600;
`;

function Main() {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { logInDone, logInError } = useSelector(
    (state: RootState) => state.login,
  );

  const onClickSignUp = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickGoogle = () => {
    dispatch(googleLogIn());
  };

  const onClickLogIn = () => {
    navigation('/login');
  };

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }

    if (logInDone) {
      navigation('/home', { replace: true });
    }
  }, [logInError, logInDone]);

  return (
    <Wrapper>
      <MainImage
        src={`${process.env.PUBLIC_URL}/images/img_StartTwitter.png `}
      />

      <MainContainer>
        <Logo />
        <h1>지금 일어나고 있는 일</h1>
        <h2>오늘 트위터에 가입하세요.</h2>
        <ButtonContainer>
          <Button onClick={onClickSignUp}>가입하기</Button>
          <Button onClick={onClickLogIn}>로그인</Button>
          <Button onClick={onClickGoogle}>
            <AiOutlineGoogle />
            Google로 시작하기
          </Button>
        </ButtonContainer>
      </MainContainer>
      <SignUpModal isOpen={isOpen} onClickSignUp={onClickSignUp} />
    </Wrapper>
  );
}

export default Main;
