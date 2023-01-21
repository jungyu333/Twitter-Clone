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
