import React from 'react';
import {
  MenuItem,
  Modal,
  NativeSelect,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import styled from 'styled-components';
import { ISignUpModalProps } from 'types/main';

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

const MainContainer = styled.div`
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

const Button = styled.button`
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
  return (
    <div>
      <Modal open={isOpen} onClose={onClickSignUp}>
        <ModalContainer>
          <Logo src={`${process.env.PUBLIC_URL}/images/ic_logo.png `} />

          <MainContainer>
            <h1>계정을 생성하세요</h1>
            <InputContainer>
              <TextField type="text" label="이름" />
              <TextField type="email" label="이메일" />
            </InputContainer>

            <DateContainer>
              <h2>생년월일</h2>
              <p>
                이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등
                계정 주제에 상관없이 나의 연령을 확인하세요.
              </p>
              <DateInputContainer>
                <DateInputItem>
                  <label>월</label>
                  <NativeSelect value={4}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                      return <option value={item}>{item}월</option>;
                    })}
                  </NativeSelect>
                </DateInputItem>

                <DateInputItem>
                  <label>일</label>
                  <NativeSelect value={23}>
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                    ].map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </NativeSelect>
                </DateInputItem>
                <DateInputItem>
                  <label>년</label>
                  <NativeSelect value={1}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </NativeSelect>
                </DateInputItem>
              </DateInputContainer>
            </DateContainer>
            <Button>가입하기</Button>
          </MainContainer>
        </ModalContainer>
      </Modal>
    </div>
  );
}

export default SignUpModal;
