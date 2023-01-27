import SubmitButton from 'components/common/SubmitButton';
import React from 'react';
import styled from 'styled-components';
import { ISignUpInfoProps } from 'types/main';
import { emailRegex } from 'utils';
import DayInput from './DayInput';
import Input from './Input';
import MonthInput from './MonthInput';
import YearInput from './YearInput';

const Wrapper = styled.form`
  margin-top: 30px;
  width: 80%;
  height: 100%;
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
  margin-top: 90px;

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

function SignUpInfo({
  register,
  formState,
  handleSubmit,
  onClickNext,
}: ISignUpInfoProps) {
  return (
    <Wrapper>
      <h1>계정을 생성하세요</h1>
      <InputContainer>
        <Input
          type="text"
          label="이름"
          errors={formState.errors.name}
          register={register('name', {
            required: '이름을 입력해주세요.',
          })}
        />

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
      </InputContainer>

      <DateContainer>
        <h2>생년월일</h2>
        <p>
          이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
          주제에 상관없이 나의 연령을 확인하세요.
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
      <SubmitButton
        text="다음"
        handleSubmit={handleSubmit}
        onClickCallBack={onClickNext!}
      />
    </Wrapper>
  );
}

export default SignUpInfo;
