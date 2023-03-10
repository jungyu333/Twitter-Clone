import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ISignUpInputData, ISignUpModalProps } from 'types/main';
import { useForm } from 'react-hook-form';
import SignUpInfo from './SignUpInfo';
import SignUpPassword from './SignUpPassword';
import { MdClear, MdKeyboardBackspace } from 'react-icons/md';
import { RootState, useAppDispatch } from 'redux/store';
import { signUp } from 'redux/action/auth';
import { useSelector } from 'react-redux';
import Logo from 'components/common/Logo';

const ModalContainer = styled.div`
  position: absolute;
  width: 550px;
  height: 700px;
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

const HeaderButton = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  left: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

function SignUpModal({ isOpen, onClickSignUp }: ISignUpModalProps) {
  const [isNext, setIsNext] = useState(false);
  const { signUpDone, signUpError } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useAppDispatch();

  const onClickClose = () => {
    onClickSignUp();
    setIsNext(false);
  };

  const { register, handleSubmit, formState, getValues, reset } =
    useForm<ISignUpInputData>();

  const onValide = (inputData: ISignUpInputData) => {
    dispatch(signUp(inputData));
  };

  const onClickNext = () => {
    setIsNext((prev) => !prev);
  };

  const onClickPrevious = () => {
    setIsNext((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  useEffect(() => {
    if (signUpDone) {
      alert('??????????????? ?????????????????????.');
      onClickSignUp();
      setIsNext((prev) => !prev);
    }

    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpDone, signUpError]);

  return (
    <>
      <Modal open={isOpen} onClose={onClickClose}>
        <ModalContainer>
          <HeaderButton>
            {!isNext ? (
              <MdClear onClick={onClickClose} />
            ) : (
              <MdKeyboardBackspace onClick={onClickPrevious} />
            )}
          </HeaderButton>
          <Logo />
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
