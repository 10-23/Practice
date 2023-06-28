import Counter from "./components/Counter";
import CounterWithHook from "./components/CounterWithHook";
import FormWithHook from "./components/FormWithHook";

function App() {
  return (
    <div>
      <h3>일반적으로 만든 카운트</h3>
      <Counter />
      <h2>custom hook으로 만든 카운트</h2>
      <CounterWithHook />
      <h3>custom hook으로 만든 폼</h3>
      <FormWithHook />
    </div>
  );
}

export default App;
