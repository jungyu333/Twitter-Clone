import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth';
import logInSlice from './logIn';
import tweetSlice from './tweet';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  login: logInSlice.reducer,
  tweet: tweetSlice.reducer,
});

export default rootReducer;
