import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'fbase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
