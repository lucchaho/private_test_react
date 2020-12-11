import { configureStore } from '@reduxjs/toolkit';
import ballsReducer from './reducer/ballsSlice';
import starsReducer from './reducer/starsSlice';

export default configureStore({
  reducer: {
    balls: ballsReducer,
    stars: starsReducer,
  },
});
