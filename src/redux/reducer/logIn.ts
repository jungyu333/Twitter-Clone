import { createSlice } from '@reduxjs/toolkit';
import { googleLogIn, localLogIn } from 'redux/action/logIn';
import { IUser } from 'types/common';

export interface LogInState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  user: IUser | null;
}

const initialState: LogInState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  user: null,
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
        if (action.payload) {
          state.user = action.payload;
        }
      })
      .addCase(localLogIn.fulfilled, (state, action) => {
        state.logInDone = true;
        state.logInLoading = true;
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
      });
  },
});
