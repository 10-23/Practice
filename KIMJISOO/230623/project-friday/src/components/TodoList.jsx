function ShowTodos({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function TodoList() {
  const todos = [
    { id: 1, text: "할 일1" },
    { id: 2, text: "할 일2" },
    { id: 3, text: "할 일3" },
    { id: 4, text: "할 일4" },
  ];
  return <ShowTodos todos={todos} />;
}

export default TodoList;
