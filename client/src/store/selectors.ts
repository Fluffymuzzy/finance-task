import { RootState } from "./store";

export const selectQuoteData = (state: RootState) => state.quotes.quotesData;
export const selectExampleQuotes = (state: RootState) =>
  state.quotes.exampleQuotes;
export const selectFetchInterval = (state: RootState) =>
  state.quotes.fetchInterval;
