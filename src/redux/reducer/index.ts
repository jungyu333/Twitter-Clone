import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import logInSlice from './logIn';
import tweetSlice from './tweet';
import commentSlice from './comment';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  login: logInSlice.reducer,
  tweet: tweetSlice.reducer,
  comment: commentSlice.reducer,
});

export default rootReducer;
