import React from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import styled from 'styled-components';
import { ISubmitButtonProps } from 'types/common';
import { ISignUpInputData } from 'types/main';

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

function SubmitButton({
  text,
  handleSubmit,
  onClickCallBack,
}: ISubmitButtonProps) {
  return <Button onClick={handleSubmit(onClickCallBack)}>{text}</Button>;
}

export default SubmitButton;
