import { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      return [...state, action.payload];
    case "DeleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      dispatch({ type: "AddTodo", payload: newTodo });
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DeleteTodo", payload: id });
  };

  return (
    <>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoReducer;
