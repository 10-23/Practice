import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }; //초기값 지정

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrease: (state, action) => {
      state.value = state.value - action.payload;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;
