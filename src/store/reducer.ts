import { combineReducers } from '@reduxjs/toolkit';
import { questionsSlice } from '../slice';

export const rootReducer = combineReducers({
  questions: questionsSlice.reducer,
  loading: questionsSlice.reducer
});
