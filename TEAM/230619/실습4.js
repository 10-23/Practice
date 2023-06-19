const todoList = document.querySelector('.todoList');
const container = document.querySelector('.inputContainer');
const addBtn = document.querySelector('.addBtn');

// let toDos = [];
// const todoKey = '할 일';

container.addEventListener('submit', (e) => {
  e.preventDefault();
  const { task } = e.target;

  if (task.value.length !== 0) {
    todoList.innerHTML += `
    <li class='todoItem'>
    <p>${task.value}</p>
    <button class='deleteBtn'>X</button>
    </li>
  `;
    // toDos.push(task.value);
    // saveToDos();
  } else {
    task.focus();
  }

  //   function saveToDos() {
  //     localStorage.setItem(index, JSON.stringify(toDos)); // localStorage에 리스트 저장
  //   }

  const deleteBtn = document.querySelectorAll('.deleteBtn');
  const todoItem = document.querySelectorAll('.todoItem p');

  task.value = '';

  //todo 삭제
  deleteBtn.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      todoList.removeChild(event.currentTarget.parentNode);
    });
  });

  //todo 체크
  todoItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('checked');
    });
  });
  console.log(toDos);
});

// let loadForm = () => {
//   const loadedItem = localStorage.getItem(index);
//   if (loadedItem !== null) {
//     //자바스크립트에서 다룰 수 있도록 객체로 데이터를 바꾸고
//     const parsedItem = JSON.parse(loadedItem);
//     parsedItem.forEach((item) => {
//       todoList.innerHTML += `
//         <li class='todoItem'>
//         <p>${item}</p>
//         <button class='deleteBtn'>X</button>
//         </li>
//       `;
//     });
//   }
// };

// loadForm();
