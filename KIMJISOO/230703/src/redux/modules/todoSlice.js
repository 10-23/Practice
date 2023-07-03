import { createSlice } from "@reduxjs/toolkit";

let nextID = 0;
const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      nextID++;
      state.push({
        id: nextID,
        text: action.payload,
        complete: false,
      });
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, complete: !e.complete } : e
      );
    },
  },
});

export const { add, remove, complete } = todoSlice.actions;
export default todoSlice.reducer;
