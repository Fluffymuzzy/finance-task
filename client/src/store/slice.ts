import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { QuotesTypes } from "./types";

export type QuotesState = {
  quotesData: QuotesTypes[];
};

const initialState: QuotesState = {
  quotesData: [],
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuotes: (state, action: PayloadAction<QuotesTypes[]>) => {
      state.quotesData = action.payload;
    },
  },
});


export default quotesSlice.reducer;
