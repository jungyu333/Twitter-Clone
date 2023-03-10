import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService, dataBaseService } from 'fbase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { ISignUpInputData } from 'types/main';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data: ISignUpInputData, thunkApi) => {
    try {
      const { email, password, day, month, year, name } = data;

      const isExistEmailQuery = await query(
        collection(dataBaseService, 'users'),
        where('email', '==', email),
        limit(1),
      );

      const existUser = await getDocs(isExistEmailQuery);

      if (existUser.docs.length === 0) {
        const response = await createUserWithEmailAndPassword(
          authService,
          email,
          password,
        );

        await setDoc(doc(dataBaseService, 'users', response.user.uid), {
          uid: response.user.uid,
          name: name,
          email: email,
          birthDay: day,
          birthMonth: month,
          birthYear: year,
          avatar: process.env.REACT_APP_DEFAULT_AVATAR,
        });

        return { email: response.user.email, uid: response.user.uid };
      } else {
        return thunkApi.rejectWithValue('중복된 이메일입니다');
      }
    } catch (error) {
      return thunkApi.rejectWithValue('회원가입에 실패했습니다');
    }
  },
);
