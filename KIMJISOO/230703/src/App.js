import CounterReducer from "./components/CounterReducer";
import CounterRedux from "./components/CounterRedux";
import TodoReducer from "./components/TodoReducer";
import AuthRedux from "./components/AuthRedux";
import TodoRedux from "./components/TodoRedux";
import CartRedux from "./components/CartRedux";

function App() {
  return (
    <>
      <CounterReducer />
      <hr />
      <TodoReducer />
      <hr />
      <CounterRedux />
      <hr />
      <AuthRedux />
      <hr />
      <TodoRedux />
      <hr />
      <CartRedux />
    </>
  );
}

export default App;
