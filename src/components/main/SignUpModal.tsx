import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ISignUpInputData, ISignUpModalProps } from 'types/main';
import { useForm } from 'react-hook-form';
import SignUpInfo from './SignUpInfo';
import SignUpPassword from './SignUpPassword';

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

function SignUpModal({ isOpen, onClickSignUp }: ISignUpModalProps) {
  const [isNext, setIsNext] = useState(false);

  const { register, handleSubmit, formState, setValue, setError, getValues } =
    useForm<ISignUpInputData>();

  const onValide = (inputData: ISignUpInputData) => {
    console.log(inputData);
  };

  const onClickNext = () => {
    setIsNext((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) {
      setValue('email', '');
      setValue('name', '');
      setValue('password', '');
      setValue('passwordCheck', '');
      setError('email', { message: '' });
      setError('name', { message: '' });
    }
  }, [isOpen]);

  return (
    <>
      <Modal open={isOpen} onClose={onClickSignUp}>
        <ModalContainer>
          <Logo src={`${process.env.PUBLIC_URL}/images/ic_logo.png `} />
          <>
            {!isNext ? (
              <SignUpInfo
                register={register}
                formState={formState}
                handleSubmit={handleSubmit}
                onClickNext={onClickNext}
              />
            ) : (
              <SignUpPassword
                register={register}
                formState={formState}
                handleSubmit={handleSubmit}
                onValide={onValide}
                getValues={getValues}
              />
            )}
          </>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default SignUpModal;
