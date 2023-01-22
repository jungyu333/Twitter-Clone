import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface ISignUpModalProps {
  isOpen: boolean;
  onClickSignUp: () => void;
}

export interface IInputProps {
  type: 'text' | 'email';
  label: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}

export interface IDateInputProps {
  register: UseFormRegisterReturn;
}

export interface ISignUpInputData {
  name: string;
  email: string;
  month: number;
  year: number;
  day: number;
}
