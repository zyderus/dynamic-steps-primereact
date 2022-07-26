import { createSlice } from "@reduxjs/toolkit";

const initialItems = [
  { label: "one", key: "personal", path: "/personal", active: true },
  { label: "two", key: "seat", path: "/seat", active: true },
  { label: "three", key: "payment", path: "/payment", active: true },
  {
    label: "four",
    key: "confirmation",
    path: "/confirmation",
    active: true,
  },
];

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: {
    activeStep: 0,
    items: initialItems,
  },
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const actions = { ...stepperSlice.actions };

export default stepperSlice.reducer;
