import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectQuestions = createSelector(
  (state: RootState) => ({
     questions: state.questions,
     loading: state.loading,
  }), (state) => state
);
