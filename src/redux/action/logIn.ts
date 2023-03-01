import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService, dataBaseService } from 'fbase/config';
import {
  browserSessionPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, DocumentReference, getDoc, setDoc } from 'firebase/firestore';
import { IUser } from 'types/common';

import { ILogInInputData } from 'types/login';

export const googleLogIn = createAsyncThunk(
  'login/google',
  async (_, thunkApi) => {
    try {
      const provider = new GoogleAuthProvider();
      await setPersistence(authService, browserSessionPersistence);
      const response = await signInWithPopup(authService, provider);

      const userDocument = doc(
        dataBaseService,
        'users',
        response.user.uid,
      ) as DocumentReference<IUser>;

      const userSnap = await getDoc(userDocument);

      if (!userSnap.exists()) {
        await setDoc(doc(dataBaseService, 'users', response.user.uid), {
          uid: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          birthDay: null,
          birthMonth: null,
          birthYear: null,
          avatar: response.user.photoURL,
        });

        const newUserSnap = await getDoc(userDocument);
        return newUserSnap.data();
      } else {
        return userSnap.data();
      }
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
      await setPersistence(authService, browserSessionPersistence);
      const response = await signInWithEmailAndPassword(
        authService,
        email,
        password,
      );

      const userDocument = doc(
        dataBaseService,
        'users',
        response.user.uid,
      ) as DocumentReference<IUser>;

      const userSnap = await getDoc(userDocument);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        return userData;
      } else {
        return thunkApi.rejectWithValue('유저 정보가 없습니다.');
      }
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

export const logOut = createAsyncThunk('logout', async (data, thunkApi) => {
  try {
    authService.signOut();
  } catch (error) {
    return thunkApi.rejectWithValue('로그아웃에 실패했습니다.');
  }
});

export const loginCheck = createAsyncThunk(
  'login/check',
  async (data: any, thunkApi) => {
    try {
      const userData = data;
      if (userData) {
        return userData;
      } else {
        return null;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
