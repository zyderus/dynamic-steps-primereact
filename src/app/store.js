import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "./steps/slice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});
