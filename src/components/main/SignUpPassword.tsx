import SubmitButton from 'components/common/SubmitButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { ISingnUpPasswordProps } from 'types/main';
import Input from './Input';

const Wrapper = styled.form`
  margin-top: 30px;
  width: 80%;
  height: 100px;
  & button {
    margin-top: 220px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & div {
    margin-top: 10px;
  }
`;

function SignUpPassword({
  register,
  formState,
  handleSubmit,
  onValide,
  getValues,
}: ISingnUpPasswordProps) {
  const { signUpLoading } = useSelector((state: RootState) => state.auth);
  return (
    <Wrapper>
      <h1>비밀번호 설정하기</h1>
      <InputContainer>
        <Input
          type="password"
          label="비빌번호"
          errors={formState.errors.password}
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 6자 이상으로 설정해주세요.',
            },
          })}
        />

        <Input
          type="password"
          label="비밀번호 체크하기"
          errors={formState.errors.passwordCheck}
          register={register('passwordCheck', {
            required: '비밀번호를 다시 한번 입력해주세요.',
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || '비밀번호가 일치하지 않습니다.';
              },
            },
          })}
        />
      </InputContainer>
      <SubmitButton
        text={signUpLoading ? 'Loading...' : '가입하기'}
        handleSubmit={handleSubmit}
        onClickCallBack={onValide}
      />
    </Wrapper>
  );
}

export default SignUpPassword;
