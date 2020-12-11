import { createSlice } from '@reduxjs/toolkit';

export const ballsSlice = createSlice({
  name: 'balls',
  initialState: {
    value: [],
  },
  reducers: {
    axReplaceBalls: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { axReplaceBalls } = ballsSlice.actions;
export const ballsSelector = state => state.balls.value
export default ballsSlice.reducer;
