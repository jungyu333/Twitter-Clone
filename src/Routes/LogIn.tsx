import Logo from 'components/common/Logo';
import SubmitButton from 'components/common/SubmitButton';
import Input from 'components/main/Input';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { localLogIn } from 'redux/action/logIn';
import { RootState, useAppDispatch } from 'redux/store';
import styled from 'styled-components';
import { ILogInInputData } from 'types/login';
import { emailRegex } from 'utils';

const Wrapper = styled.form`
  width: 500px;
  height: 800px;
  margin: 0 auto;
  margin-top: 5rem;

  & button {
    margin-top: 20px;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 10px 0;
`;

const ButtonContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  & div {
    margin-top: 10px;
  }
`;

const LogInError = styled.div`
  background-color: ${({ theme }) => theme.colors.status};
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-top: 15px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.error};
`;

function LogIn() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { logInDone, logInError, logInLoading } = useSelector(
    (state: RootState) => state.login,
  );
  const { register, handleSubmit, formState } = useForm<ILogInInputData>();
  const onValide = (inputData: ILogInInputData) => {
    dispatch(localLogIn(inputData));
  };

  useEffect(() => {
    if (logInDone) {
      navigation('/home', { replace: true });
    }
  }, [logInDone]);

  return (
    <Wrapper>
      <Logo />
      <Header>트위터 로그인</Header>
      {logInError && <LogInError>{logInError}</LogInError>}
      <ButtonContainer>
        <Input
          type="email"
          label="이메일"
          errors={formState.errors.email}
          register={register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: emailRegex,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        <Input
          type="password"
          label="비밀번호"
          errors={formState.errors.password}
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 6자 이상입니다.',
            },
          })}
        />
      </ButtonContainer>
      <SubmitButton
        text={logInLoading ? 'Loading...' : '로그인'}
        handleSubmit={handleSubmit}
        onClickCallBack={onValide}
      />
    </Wrapper>
  );
}

export default LogIn;
