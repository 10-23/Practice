import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, complete } from "../redux/modules/todoSlice";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  const [todoInput, setTodoInput] = useState({
    id: 0,
    text: "",
  });

  const handleInput = (e) => {
    setTodoInput({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.text !== "") {
      dispatch(add(todoInput.text));
    } else {
      alert("할 일을 입력해주세요");
    }
    setTodoInput({ text: "" });
  };

  return (
    <>
      <h1>Redux로 할 일 목록 만들기</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput.text}
          onChange={handleInput}
          placeholder="할 일을 입력해주세요."
        />
        <input type="submit" value="추가" />
      </form>
      <ul>
        {todoList.map((todo, idx) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => dispatch(complete(todoList[idx].id))}
            />
            {todo.complete === false ? (
              <>{todo.text}</>
            ) : (
              <del>{todo.text}</del>
            )}
            <button onClick={() => dispatch(remove(todoList[idx].id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoRedux;
