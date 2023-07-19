// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: null,
    loading: false,
    isSignIn: null,
    user:{},
    questions:{},
    selectedAnswers: {}
  },
  reducers: {
    signInRequest: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.selectedAnswers = {};
      state.isSignIn = true;
      state.user = action.payload;

    },
    getQuestions: (state, action) => {
      state.selectedAnswers = {};
      state.questions = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isSignIn = false;
    },
    userLogOut: (state, action) => {
      state.isSignIn = false;
      state.selectedAnswers = {};
    },
    getSelectedAnswers : (state, action) => {
      // console.log("inside slice"+action.payload)
      state.selectedAnswers = action.payload;
    }
  },
});

export const { signInRequest,getQuestions, getSelectedAnswers, userLogOut, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
