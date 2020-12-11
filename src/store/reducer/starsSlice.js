import { createSlice } from '@reduxjs/toolkit';

export const starsSlice = createSlice({
  name: 'stars',
  initialState: {
    value: [],
  },
  reducers: {
    axReplaceStars: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { axReplaceStars } = starsSlice.actions;
export const starsSelector = state => state.stars.value
export default starsSlice.reducer;
