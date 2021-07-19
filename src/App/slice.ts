import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestionsThunk } from './thunks';
import { IQuestion } from './IQuestion';


interface IQuestionState {
  questions: Array<IQuestion>;
  loading: string;
  error: string;
  answers: Array<Array<string>>;
  questionIndex: number;
  userAnswers: Array<string>;
}

/*
interface IOpentdbResponse {
  response_code: number;
  results: Array<IQuestion>;
};
*/

const initialState: IQuestionState = {
  questions: [],
  loading: "idle",
  error: "",
  answers: [],
  questionIndex: 0,
  userAnswers: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    incrementQuestionIndex: (state) => {
      if(state.questions.length - 1 > state.questionIndex) {
        state.questionIndex += 1
      } else {
        state.loading = 'finished';
      }
    },
    setUserAnswer: (state, action: PayloadAction<string>) => {
      if(state.userAnswers.length === state.questionIndex) {
        state.userAnswers.push(action.payload);
      } else {
        state.userAnswers[state.questionIndex] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsThunk.pending, (state) => {
      state.questions = [];
      state.loading = "loading";
      state.answers = [];
    });
  builder.addCase(fetchQuestionsThunk.fulfilled, (state, { payload }) => {

      let castedResults = payload.data.results as Array<IQuestion>;
      let answers = [];

      for(let i = 0; i < castedResults.length; i++) {
        const correctPosition = Math.floor(Math.random() * (castedResults[i].incorrect_answers.length + 1))
        let newQuestionsList = [...castedResults[i].incorrect_answers];

        if(correctPosition < newQuestionsList.length) {
          const temp = newQuestionsList[correctPosition];
          newQuestionsList[correctPosition] = castedResults[i].correct_answer;
          newQuestionsList.push(temp);
        } else {
          newQuestionsList.push(castedResults[i].correct_answer);
        }

        answers.push(newQuestionsList);
      }

      state.questions = castedResults;
      state.loading = "loaded";
      state.answers = answers;
    });
    builder.addCase(fetchQuestionsThunk.rejected,(state, action) => {
      state.loading = "error";
      state.error = action.error.message || "Unknown error";
    });
  }
});

export const { incrementQuestionIndex, setUserAnswer } = questionsSlice.actions
