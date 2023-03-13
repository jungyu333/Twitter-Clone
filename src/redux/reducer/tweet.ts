import { createSlice, current } from '@reduxjs/toolkit';
import { createComment, createTweet, loadTweets } from 'redux/action/tweet';
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
  createCommentError: string | null;
  createCommentLoading: boolean;
  createCommentDone: boolean;
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
  createCommentError: null,
  createCommentLoading: false,
  createCommentDone: false,
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    resetTweets: (state) => {
      state.tweets = [];
    },
  },
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
      .addCase(createComment.pending, (state) => {
        state.createCommentLoading = true;
        state.createCommentError = null;
        state.createCommentDone = false;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.createCommentLoading = false;
        state.createCommentError = null;
        state.createCommentDone = true;
        const tweetId = action.payload?.tweetId;
        if (tweetId) {
          const tweets = [...current(state.tweets)];
          const index = tweets.findIndex((tweet) => {
            return tweet.id === tweetId;
          });
          let currentCommentsNum = tweets[index].commentsNum;
          const modifyTweets = {
            ...tweets[index],
            commentsNum: currentCommentsNum + 1,
          };
          tweets.splice(index, 1, modifyTweets);
          state.tweets = tweets;
        }
      })
      .addCase(createComment.rejected, (state, action) => {
        state.createCommentLoading = false;
        state.createCommentDone = false;
        state.createCommentError = action.payload as string;
      });
  },
});

export const { resetTweets } = tweetSlice.actions;
export default tweetSlice;
