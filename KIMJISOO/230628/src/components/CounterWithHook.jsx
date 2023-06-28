import useCounter from "../hooks/useCounter";

const CounterWithHook = () => {
  const { count, handleIncrease, handleDecrease } = useCounter(0);
  return (
    <>
      <p>카운트 : {count}</p>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </>
  );
};

export default CounterWithHook;
