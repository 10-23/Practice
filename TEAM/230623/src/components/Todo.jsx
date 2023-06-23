import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTodos((currentInput) => [
      {
        id: Date.now(),
        text: input,
      },
      ...currentInput,
    ]);
    setInput("");
  }
  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <form>
        <label>todo : </label>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleClick}>추가</button>
      </form>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
