import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestionsThunk = createAsyncThunk(
  "questions/fetchQuestions", async (_, thunkAPI) => {
     try {
        const response = await axios.get("https://opentdb.com/api.php?amount=3");
        return await response;
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});
