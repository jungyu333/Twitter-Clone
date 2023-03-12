import { createAsyncThunk } from '@reduxjs/toolkit';
import { dataBaseService } from 'fbase/config';
import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { IUser } from 'types/common';
import { IComment, ICreateCommentData } from 'types/home';

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

      const commentsRef = collection(
        dataBaseService,
        'tweets',
        tweetId,
        'comments',
      );

      if (writerData) {
        await addDoc(commentsRef, {
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

export const loadComments = createAsyncThunk(
  'load/comments',
  async (data: string, thunkApi) => {
    try {
      const comments: IComment[] = [];
      const tweetId = data;
      const commentsQuery = query(
        collection(dataBaseService, 'comments'),
        where('tweetId', '==', tweetId),
      );
      const commentsSnap = await getDocs(commentsQuery);
      commentsSnap.forEach((comment) => {
        const commentId = comment.id;
        const temp = { ...comment.data(), id: commentId };
        comments.push(temp as IComment);
      });
      return { comments: comments, tweetId: tweetId };
    } catch (error) {
      return thunkApi.rejectWithValue('댓글을 불러오는데 실패햐였습니다.');
    }
  },
);
