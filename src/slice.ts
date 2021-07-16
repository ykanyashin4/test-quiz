import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestionsThunk } from './thunks';

interface IQuestionState {
  questions: Array<IQuestion>;
  loading: string;
  error: string;
}

/*
interface IOpentdbResponse {
  response_code: number;
  results: Array<IQuestion>;
};
*/

interface IQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};

const initialState: IQuestionState = {
  questions: [],
  loading: "idle",
  error: "",
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsThunk.pending, (state) => {
      state.questions = [];
      state.loading = "loading";
    });
  builder.addCase(fetchQuestionsThunk.fulfilled, (state, { payload }) => {
      state.questions = payload.data.results;
      state.loading = "loaded";
    });
    builder.addCase(fetchQuestionsThunk.rejected,(state, action) => {
      state.loading = "error";
      state.error = action.error.message || "Unknown error";
    });
  }
});
