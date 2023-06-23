import { useReducer } from "react";

const COUNTER = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

const reducer = (state, { type, step }) => {
  switch (type) {
    case COUNTER.INCREASE: {
      return state + step;
    }
    case COUNTER.DECREASE: {
      return state - step;
    }
    default: {
      return state;
    }
  }
};

const Practice05 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: COUNTER.INCREASE, step: 1 })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: COUNTER.DECREASE, step: 1 })}>-</button>
    </div>
  );
};

export default Practice05;
