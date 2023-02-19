import { createSlice } from '@reduxjs/toolkit';
import { googleLogIn, localLogIn, logOut } from 'redux/action/logIn';
import { createTweet } from 'redux/action/tweet';
import { IUser } from 'types/common';

export interface tweetState {
  tweetUploadLoading: boolean;
  tweetUploadError: string | null;
  tweetUploadDone: boolean;
}

const initialState: tweetState = {
  tweetUploadLoading: false,
  tweetUploadError: null,
  tweetUploadDone: false,
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
      });
  },
});
