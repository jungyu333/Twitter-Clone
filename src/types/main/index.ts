import {
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { ILogInInputData } from 'types/login';

export interface ISignUpModalProps {
  isOpen: boolean;
  onClickSignUp: () => void;
}

export interface IInputProps {
  type: 'text' | 'email' | 'password';
  label: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}

export interface IDateInputProps {
  register: UseFormRegisterReturn;
}

export interface ISignUpInputData extends ILogInInputData {
  name: string;
  month: number;
  year: number;
  day: number;
  passwordCheck: string;
}

export interface ISignUpInfoProps {
  register: UseFormRegister<ISignUpInputData>;
  formState: FormState<ISignUpInputData>;
  handleSubmit: UseFormHandleSubmit<ISignUpInputData>;
  onClickNext?: () => void;
}

export interface ISingnUpPasswordProps extends ISignUpInfoProps {
  onValide: (inputData: ISignUpInputData) => void;
  getValues: UseFormGetValues<ISignUpInputData>;
}
