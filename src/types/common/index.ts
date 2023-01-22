import { UseFormHandleSubmit } from 'react-hook-form';
import { ISignUpInputData } from 'types/main';

export interface ISubmitButtonProps {
  text: string;
  handleSubmit: UseFormHandleSubmit<ISignUpInputData>;
  onClickCallBack: (() => void) | ((inputData: ISignUpInputData) => void);
}
