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
    activeStepsLength: initialItems.length,
    items: initialItems,
  },
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    resetItems: state => {
      state.items = initialItems;
    },
    toggleStepActiveStatus: (state, action) => {
      const { name, value } = action.payload;
      const selectedItem = state.items.find(item => item.key === name);
      selectedItem.active = value;

      const activeItems = state.items.filter(item => item.active);
      state.activeStepsLength = activeItems.length;
    },
  },
});

export const actions = { ...stepperSlice.actions };

export default stepperSlice.reducer;
