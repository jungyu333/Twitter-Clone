import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { IInputProps } from 'types/main';

const InputError = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 5px;
`;

function Input({ type, label, register, errors }: IInputProps) {
  return (
    <>
      <TextField
        error={Boolean(errors)}
        autoComplete="off"
        {...register}
        type={type}
        label={label}
      />
      {errors ? <InputError>{errors.message}</InputError> : null}
    </>
  );
}

export default Input;
