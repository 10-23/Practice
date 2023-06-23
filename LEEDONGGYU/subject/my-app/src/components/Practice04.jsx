import { useState } from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

const Practice04 = () => {
  const [todos] = useState([
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
  ]);
  return <TodoList todos={todos} />;
};

export default Practice04;
