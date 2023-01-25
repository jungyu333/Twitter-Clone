import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { logInSlice } from './logIn';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  login: logInSlice.reducer,
});

export default rootReducer;
