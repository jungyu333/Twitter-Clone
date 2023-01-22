import React, { useEffect } from 'react';
import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ISignUpInputData, ISignUpModalProps } from 'types/main';
import MonthInput from './MonthInput';
import DayInput from './DayInput';
import YearInput from './YearInput';
import { useForm } from 'react-hook-form';
import Input from './Input';

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 550px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightgray};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  & h1 {
    font-size: 1.9rem;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

const MainContainer = styled.form`
  padding: 0 50px;
  margin-top: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & div {
    margin-top: 10px;
  }
`;

const DateContainer = styled.div`
  margin-top: 70px;

  & h2 {
    font-weight: 900;
  }

  & p {
    color: ${({ theme }) => theme.colors.lightgray};
    margin-top: 10px;
    font-size: 0.9rem;
  }
`;

const DateInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
`;

const DateInputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  & label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.lightgray};
  }

  &:first-child {
    width: 40%;
  }

  &:nth-child(even) {
    margin: 0 10px;
    width: 25%;
  }
`;

const SubmitButton = styled.button`
  margin: 12px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.lightgray};
  padding: 15px 5px;
  width: 100%;
  min-width: max-content;
  border-radius: 30px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightgray};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    border: 2px solid ${({ theme }) => theme.colors.contents};
    color: ${({ theme }) => theme.colors.white};
  }
`;

function SignUpModal({ isOpen, onClickSignUp }: ISignUpModalProps) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<ISignUpInputData>();

  const onValide = (inputData: ISignUpInputData) => {
    console.log(inputData);
  };

  useEffect(() => {
    if (!isOpen) {
      setValue('email', '');
      setValue('name', '');
      setError('email', { message: '' });
      setError('name', { message: '' });
    }
  }, [isOpen]);

  return (
    <div>
      <Modal open={isOpen} onClose={onClickSignUp}>
        <ModalContainer>
          <Logo src={`${process.env.PUBLIC_URL}/images/ic_logo.png `} />

          <MainContainer>
            <h1>계정을 생성하세요</h1>
            <InputContainer>
              <Input
                type="text"
                label="이름"
                errors={errors.name}
                register={register('name', {
                  required: '이름을 입력해주세요.',
                })}
              />

              <Input
                type="email"
                label="이메일"
                errors={errors.email}
                register={register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: emailRegex,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
              />
            </InputContainer>

            <DateContainer>
              <h2>생년월일</h2>
              <p>
                이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등
                계정 주제에 상관없이 나의 연령을 확인하세요.
              </p>
              <DateInputContainer>
                <DateInputItem>
                  <MonthInput register={register('month')} />
                </DateInputItem>
                <DateInputItem>
                  <DayInput register={register('day')} />
                </DateInputItem>
                <DateInputItem>
                  <YearInput register={register('year')} />
                </DateInputItem>
              </DateInputContainer>
            </DateContainer>
            <SubmitButton onClick={handleSubmit(onValide)}>
              가입하기
            </SubmitButton>
          </MainContainer>
        </ModalContainer>
      </Modal>
    </div>
  );
}

export default SignUpModal;
