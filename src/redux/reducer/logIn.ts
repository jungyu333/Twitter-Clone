import { createSlice } from '@reduxjs/toolkit';
import {
  googleLogIn,
  localLogIn,
  loginCheck,
  logOut,
} from 'redux/action/logIn';
import { IUser } from 'types/common';

export interface LogInState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  user: IUser | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;
  loginCheckError: string | null;
}

const initialState: LogInState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  user: null,
  loginCheckError: null,
};

export const logInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(googleLogIn.pending, (state) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(localLogIn.pending, (state) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(googleLogIn.fulfilled, (state, action) => {
        state.logInDone = true;
        state.logInLoading = true;
        state.logInError = null;
        state.logOutDone = false;
        if (action.payload) {
          console.log(action.payload);
          state.user = action.payload;
        }
      })
      .addCase(localLogIn.fulfilled, (state, action) => {
        state.logInDone = true;
        state.logInLoading = true;
        state.logOutDone = false;
        state.logInError = null;
        if (action.payload) {
          state.user = action.payload;
        }
      })
      .addCase(googleLogIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = action.payload as string;
      })
      .addCase(localLogIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = action.payload as string;
      })
      .addCase(logOut.pending, (state) => {
        state.logOutLoading = true;
        state.logOutDone = false;
        state.logOutError = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.logOutLoading = false;
        state.logOutDone = true;
        state.logInDone = false;
        state.user = null;
        state.logOutError = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.logOutLoading = false;
        state.logOutDone = false;
        state.logOutError = action.payload as string;
      })
      .addCase(loginCheck.pending, (state) => {})

      .addCase(loginCheck.fulfilled, (state, action) => {
        console.log(action);
        if (action.payload) {
          console.log('payload 잇음');
          console.log(action.payload);
          state.user = action.payload;
        }
      })
      .addCase(loginCheck.rejected, (state, action) => {
        state.loginCheckError = action.payload as string;
      });
  },
});
