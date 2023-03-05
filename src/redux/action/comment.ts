import { createAsyncThunk } from '@reduxjs/toolkit';
import { dataBaseService } from 'fbase/config';
import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDoc,
} from 'firebase/firestore';
import { IUser } from 'types/common';
import { ICreateCommentData } from 'types/home';

export const createComment = createAsyncThunk(
  'post/comment',
  async (data: ICreateCommentData, thunkApi) => {
    try {
      const { tweetId, userId, text, createdAt } = data;

      const writerDocument = doc(
        dataBaseService,
        'users',
        userId,
      ) as DocumentReference<IUser>;

      const writerSnap = await getDoc(writerDocument);
      const writerData = writerSnap.data();

      if (writerData) {
        await addDoc(collection(dataBaseService, 'comments'), {
          text: text,
          tweetId: tweetId,
          userId: writerData.uid,
          avatar: writerData.avatar,
          email: writerData.email,
          name: writerData.name,
          createdAt: createdAt,
        });
      }
    } catch (error) {
      return thunkApi.rejectWithValue('댓글 작성에 실패하였습니다.');
    }
  },
);
