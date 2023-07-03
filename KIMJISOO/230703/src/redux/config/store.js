import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";
import authSlice from "../modules/authSlice";
import todoSlice from "../modules/todoSlice";
import cartSlice from "../modules/cartSlice";

const store = configureStore({
  reducer: {
    // counterSlice 안에 increase, decrease를 모은 것이 counterSlice.reducer이다.
    counter: counterSlice,
    auth: authSlice,
    todo: todoSlice,
    cart: cartSlice,
  },
});

export default store;
