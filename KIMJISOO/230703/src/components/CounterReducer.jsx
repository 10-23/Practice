import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  // dispathch는 액션을 발생시키는 함수.

  return (
    <>
      <h1>숫자 카운트</h1>
      <p>Count : {count}</p>
      <button onClick={() => dispatch({ type: "Increase" })}>증가</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>감소</button>
      <button onClick={() => dispatch({ type: "Reset" })}>리셋</button>
    </>
  );
};

export default CounterReducer;
