import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { ILogInInputData } from 'types/login';
import { ISignUpInputData } from 'types/main';

export interface ISubmitButtonProps {
  text: string;
  handleSubmit: UseFormHandleSubmit<any>;

  onClickCallBack:
    | (() => void)
    | ((inputData: ISignUpInputData) => void)
    | ((inputData: ILogInInputData) => void);
}
