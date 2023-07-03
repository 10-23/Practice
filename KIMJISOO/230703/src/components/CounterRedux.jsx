import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../redux/modules/counterSlice";

const CounterRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <>
      <h1>Redux로 카운터 만들기</h1>
      <p>Count : {count}</p>
      <button onClick={() => dispatch(increase(1))}>증가</button>
      <button onClick={() => dispatch(decrease(1))}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </>
  );
};

CounterRedux.defaultProps = {
  number: 0,
};

export default CounterRedux;
