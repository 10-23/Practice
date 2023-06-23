import Counter from "components/Counter";
import Greeting from "components/Greeting";
import Timer from "components/Timer";
import TodoList from "components/TodoList";
import Toggle from "components/Toggle";

function App() {
  return (
    <div>
      <h1>Thanks God It's Friday!!</h1>
      <Greeting name="지수" />
      <Counter />
      <Toggle />
      <TodoList />
      <Timer />
    </div>
  );
}

export default App;
