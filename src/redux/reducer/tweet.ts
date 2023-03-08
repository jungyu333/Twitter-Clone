import { createSlice, current } from '@reduxjs/toolkit';
import { loadComments } from 'redux/action/comment';
import { createTweet, loadTweets } from 'redux/action/tweet';
import { ITweet } from 'types/home';

export interface tweetState {
  tweetUploadLoading: boolean;
  tweetUploadError: string | null;
  tweetUploadDone: boolean;
  tweets: ITweet[];
  tweetsLoading: boolean;
  tweetsError: string | null;
  commentsLoadLoading: boolean;
  commentsLoadError: string | null;
  commentsLoadDone: boolean;
}

const initialState: tweetState = {
  tweetUploadLoading: false,
  tweetUploadError: null,
  tweetUploadDone: false,
  tweets: [],
  tweetsLoading: false,
  tweetsError: null,
  commentsLoadLoading: false,
  commentsLoadError: null,
  commentsLoadDone: false,
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
      })
      .addCase(loadComments.pending, (state) => {
        state.commentsLoadLoading = true;
        state.commentsLoadError = null;
        state.commentsLoadDone = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        const comments = action.payload.comments;
        const tweets = [...current(state.tweets)];
        const index = tweets.findIndex(
          (tweet) => tweet.id === action.payload.tweetId,
        );

        const tweetHasComments = { ...tweets[index], comments: comments };

        tweets.splice(index, 1, tweetHasComments);
        state.tweets = tweets;
        state.commentsLoadLoading = false;
        state.commentsLoadDone = true;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.commentsLoadLoading = false;
        state.commentsLoadError = action.payload as string;
        state.commentsLoadDone = false;
      });
  },
});
