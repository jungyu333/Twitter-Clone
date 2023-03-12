import { createSlice } from '@reduxjs/toolkit';
import { createComment } from 'redux/action/comment';

export interface commentState {
  createCommentError: string | null;
  createCommentLoading: boolean;
}

const initialState: commentState = {
  createCommentError: null,
  createCommentLoading: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.createCommentLoading = true;
        state.createCommentError = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.createCommentLoading = false;
        state.createCommentError = null;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.createCommentLoading = false;
        state.createCommentError = action.payload as string;
      });
  },
});

export default commentSlice;
