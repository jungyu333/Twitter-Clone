import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { dataBaseService, storageService } from 'fbase/config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { ITweetData, ITweet, ICreateCommentData } from 'types/home';
import { IUser } from 'types/common';

export const createTweet = createAsyncThunk(
  'post/tweet',
  async (data: ITweetData, thunkApi) => {
    try {
      const attachmentImages: string[] = [];
      const { text, userId, createdAt, tweetImages } = data;

      if (tweetImages && tweetImages.length > 0) {
        const imagePromise = tweetImages.map(async (image: string) => {
          const fileRef = ref(storageService, `${userId}/${v4()}`);
          const response = await uploadString(fileRef, image, 'data_url');

          const attachmentUrl = await getDownloadURL(response.ref);
          attachmentImages.push(attachmentUrl);
        });

        await Promise.all(imagePromise);
      }

      const writerDocument = doc(
        dataBaseService,
        'users',
        userId,
      ) as DocumentReference<IUser>;

      const writerSnap = await getDoc(writerDocument);
      const writerData = writerSnap.data();
      const tweetRef = collection(dataBaseService, 'tweets');
      const newTweetRef = doc(tweetRef);

      if (writerData) {
        await setDoc(newTweetRef, {
          text: text,
          userId: writerData.uid,
          avatar: writerData.avatar,
          email: writerData.email,
          name: writerData.name,
          createdAt: createdAt,
          commentsNum: 0,
          images: attachmentImages.length === 0 ? [] : attachmentImages,
        });
      }
    } catch (error) {
      return thunkApi.rejectWithValue('업로드에 실패하였습니다.');
    }
  },
);

export const loadTweets = createAsyncThunk(
  'load/tweets',
  async (data, thunkApi) => {
    try {
      const tweets: ITweet[] = [];
      const tweetsQuery = query(
        collection(dataBaseService, 'tweets'),
        orderBy('createdAt', 'desc'),
      );
      const tweetsSnap = await getDocs(tweetsQuery);
      tweetsSnap.forEach((tweet) => {
        const tweetId = tweet.id;
        const temp = { ...tweet.data(), id: tweetId };
        tweets.push(temp as ITweet);
      });
      return tweets;
    } catch (error) {
      return thunkApi.rejectWithValue('게시물을 가져오는데 실패하였습니다.');
    }
  },
);

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
        const newCommentRef = await addDoc(commentsRef, {
          text: text,
          tweetId: tweetId,
          userId: writerData.uid,
          avatar: writerData.avatar,
          email: writerData.email,
          name: writerData.name,
          createdAt: createdAt,
        });

        const tweetRef = doc(dataBaseService, 'tweets', tweetId);

        onSnapshot(commentsRef, (querySnapshot) => {
          const commentsNum = querySnapshot.size;
          updateDoc(tweetRef, { commentsNum: commentsNum });
        });

        const commentRef = doc(
          dataBaseService,
          'tweets',
          tweetId,
          'comments',
          newCommentRef.id,
        );
        const commentDoc = await getDoc(commentRef);
        return { tweetId: tweetId, comment: commentDoc.data() };
      } else {
        return null;
      }
    } catch (error) {
      return thunkApi.rejectWithValue('댓글 작성에 실패하였습니다.');
    }
  },
);
