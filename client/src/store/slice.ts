import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { QuotesTypes } from "./types";

export type QuotesState = {
  quotesData: QuotesTypes[];
  exampleQuotes: string[];
  fetchInterval: number;
};

const initialState: QuotesState = {
  quotesData: [],
  exampleQuotes: [],
  fetchInterval: 5,
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuotes: (state, action: PayloadAction<QuotesTypes[]>) => {
      state.quotesData = action.payload;
    },
    exampleQuotes: (state, action: PayloadAction<string[]>) => {
      state.exampleQuotes = action.payload;
    },
    setIntervalTime: (state, action: PayloadAction<number>) => {
      state.fetchInterval = action.payload;
    },
  },
});

export const {
  setQuotes,
  exampleQuotes,
  setIntervalTime,
} = quotesSlice.actions;

export default quotesSlice.reducer;
