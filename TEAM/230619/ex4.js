const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = toDoInput.value;
  if (todo) {
    addToDo(todo);
    toDoInput.value = "";
  }
});

toDoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteToDo(e.target.parentElement);
  }
});

function addToDo(todo) {
  const toDoItem = document.createElement("li");
  toDoItem.classList.add("todo-item");
  toDoItem.textContent = todo;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";

  toDoItem.appendChild(deleteButton);
  toDoList.appendChild(toDoItem);
}

function deleteToDo(toDoItem) {
  toDoList.removeChild(toDoItem);
}
