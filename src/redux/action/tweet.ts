import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';
import { dataBaseService, storageService } from 'fbase/config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { ITweetData, ITweets } from 'types/home';

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

      await addDoc(collection(dataBaseService, 'tweets'), {
        text: text,
        userId: userId,
        createdAt: createdAt,
        images: attachmentImages.length === 0 ? [] : attachmentImages,
      });
    } catch (error) {
      return thunkApi.rejectWithValue('업로드에 실패하였습니다.');
    }
  },
);

export const loadTweets = createAsyncThunk(
  'load/tweets',
  async (data, thunkApi) => {
    try {
      const tweets: ITweets[] = [];
      const tweetsQuery = query(collection(dataBaseService, 'tweets'));
      const tweetsSnap = await getDocs(tweetsQuery);
      tweetsSnap.forEach((tweet) => {
        tweets.push(tweet.data() as ITweets);
      });
      return tweets;
    } catch (error) {
      return thunkApi.rejectWithValue('게시물을 가져오는데 실패하였습니다.');
    }
  },
);
