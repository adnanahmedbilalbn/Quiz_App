import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: '.',
  initialState: {
    data: null,
    error: null,
    loading: false
  },
  reducers: {
    questionsRequest: (state) => {
      state.loading = true;
    },
    questionSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;     
    },
    questionsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { questionsRequest, questionSuccess, questionsFailure } = questionSlice.actions;
export default questionSlice.reducer;
