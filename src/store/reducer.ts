import { combineReducers } from '@reduxjs/toolkit';
import { questionsSlice } from '../App/slice';

export const rootReducer = combineReducers({
  questions: questionsSlice.reducer,
  loading: questionsSlice.reducer,
  answers: questionsSlice.reducer,
  error: questionsSlice.reducer,
  questionIndex: questionsSlice.reducer,
  userAnswers: questionsSlice.reducer,
});
