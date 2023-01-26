import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'fbase/config';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { ILogInInputData } from 'types/login';

export const googleLogIn = createAsyncThunk(
  'login/google',
  async (_, thunkApi) => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(authService, provider);
      return response.user.uid;
    } catch (error) {
      return thunkApi.rejectWithValue('로그인에 실패했습니다.');
    }
  },
);

export const localLogIn = createAsyncThunk(
  'login/local',
  async (data: ILogInInputData, thunkApi) => {
    try {
      const { email, password } = data;
      const response = await signInWithEmailAndPassword(
        authService,
        email,
        password,
      );
      return response.user.uid;
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        return thunkApi.rejectWithValue('존재하지 않는 이메일입니다.');
      }
      if (error.code === 'auth/wrong-password') {
        return thunkApi.rejectWithValue('틀린 비밀번호 입니다.');
      }
      if (error.code === 'auth/too-many-requests') {
        return thunkApi.rejectWithValue('잠시 후 다시 시도해주세요.');
      }
    }
  },
);
