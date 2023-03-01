import { createSlice } from '@reduxjs/toolkit';
import { googleLogIn, localLogIn, logOut } from 'redux/action/logIn';
import { createTweet, loadTweets } from 'redux/action/tweet';
import { IUser } from 'types/common';
import { ITweets } from 'types/home';

export interface tweetState {
  tweetUploadLoading: boolean;
  tweetUploadError: string | null;
  tweetUploadDone: boolean;
  tweets: ITweets[];
  tweetsLoading: boolean;
  tweetsError: string | null;
}

const initialState: tweetState = {
  tweetUploadLoading: false,
  tweetUploadError: null,
  tweetUploadDone: false,
  tweets: [],
  tweetsLoading: false,
  tweetsError: null,
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTweet.pending, (state) => {
        state.tweetUploadLoading = true;
        state.tweetUploadError = null;
        state.tweetUploadDone = false;
      })
      .addCase(createTweet.fulfilled, (state) => {
        state.tweetUploadLoading = false;
        state.tweetUploadError = null;
        state.tweetUploadDone = true;
      })
      .addCase(createTweet.rejected, (state, action) => {
        state.tweetUploadLoading = false;
        state.tweetUploadError = action.payload as string;
        state.tweetUploadDone = false;
      })
      .addCase(loadTweets.pending, (state) => {
        state.tweetsLoading = true;
        state.tweetsError = null;
      })
      .addCase(loadTweets.fulfilled, (state, action) => {
        state.tweetsLoading = false;
        state.tweets = state.tweets.concat(action.payload);
      })
      .addCase(loadTweets.rejected, (state, action) => {
        state.tweetsLoading = false;
        state.tweetsError = action.payload as string;
      });
  },
});
