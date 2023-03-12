import { createSlice } from '@reduxjs/toolkit';
import { signUp } from 'redux/action/auth';

export interface AuthState {
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: string | null;
}

const initialState: AuthState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.signUpError = null;
        state.signUpDone = false;
        state.signUpLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUpDone = true;
        state.signUpLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = false;
        state.signUpError = action.payload as string;
      });
  },
});

export default authSlice;
