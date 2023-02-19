import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { dataBaseService } from 'fbase/config';

interface ITweetData {
  text: string;
  userId: string;
  createdAt: number;
}

export const createTweet = createAsyncThunk(
  'post/tweet',
  async (data: ITweetData, thunkApi) => {
    try {
      const { text, userId, createdAt } = data;
      await addDoc(collection(dataBaseService, 'tweets'), {
        text: text,
        userId: userId,
        createdAt: createdAt,
      });
    } catch (error) {
      return thunkApi.rejectWithValue('업로드에 실패하였습니다.');
    }
  },
);
