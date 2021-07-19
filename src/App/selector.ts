import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectQuestions = createSelector(
  (state: RootState) => ({
    questions: state.questions,
    loading: state.loading,
    answers: state.answers,
    error: state.error,
    questionIndex: state.questionIndex,
    userAnswers: state.userAnswers, 
  }), (state) => state
);
