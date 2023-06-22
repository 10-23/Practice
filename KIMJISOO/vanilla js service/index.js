// 실시간 시계
const clock = document.querySelector("#clock");

const getTime = () => {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
};

getTime();
setInterval(getTime, 1000);

//배경 이미지
const imgUrl = [
  "https://www.ghibli.jp/gallery/chihiro014.jpg",
  "https://www.ghibli.jp/gallery/chihiro003.jpg",
  "https://www.ghibli.jp/gallery/chihiro043.jpg",
  "https://www.ghibli.jp/gallery/howl050.jpg",
  "https://www.ghibli.jp/gallery/howl044.jpg",
  "https://www.ghibli.jp/gallery/howl012.jpg",
  "https://www.ghibli.jp/gallery/kazetachinu024.jpg",
  "https://www.ghibli.jp/gallery/kazetachinu050.jpg",
];

const choiceImage = imgUrl[Math.floor(Math.random() * imgUrl.length)];
const bgImage = `url(${choiceImage})`;

document.body.style.backgroundImage = bgImage;

// 이름 입력 & 인사
const userNameForm = document.querySelector("#userNameForm");
const userNameInput = document.querySelector(".user-name");
const greeting = document.querySelector("#greeting");
const resetButton = document.createElement("button");

resetButton.innerText = "Reset";

const HIDDEN_CLASSNAME = "hidden";

const onUserNameForm = (e) => {
  e.preventDefault();

  userNameForm.classList.add(HIDDEN_CLASSNAME);
  const userName = userNameInput.value;
  localStorage.setItem("userNameKEY", userName);
  onGreeting(userName);
};

const onGreeting = (userName) => {
  greeting.innerHTML = `<h1>Hello, ${userName}👋</h1>`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  userNameForm.classList.add(HIDDEN_CLASSNAME);

  greeting.appendChild(resetButton);
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("userNameKEY");
    localStorage.removeItem("todoKEY");
    window.location.reload();
  });
};

const savedUserName = localStorage.getItem("userNameKEY");

if (savedUserName === null) {
  userNameForm.classList.remove(HIDDEN_CLASSNAME);
  userNameForm.addEventListener("submit", onUserNameForm);
} else {
  onGreeting(savedUserName);
}

// 실시간 위치 및 날씨
const API_KEY = `92458b8460ef057c6345ba0532fe4491`;
const weather = document.querySelector("#weather p:first-child");
const city = document.querySelector("#weather p:last-child");

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherMain = data.weather[0].main;
      const temp = Math.round(data.main.temp);
      const cityName = data.name;
      weather.innerText = `${weatherMain} / ${temp}℃`;
      city.innerText = `@ ${cityName}`;
    });
};

const onGeoError = () => {
  alert("위치를 찾을 수 없습니다. 날씨 정보를 알려드릴 수 없습니다.😥");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

// To-do List
const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

let todoArr = [];

const saveTodos = () => {
  localStorage.setItem("todoKEY", JSON.stringify(todoArr));
};

const doneTodo = (e) => {
  const target = e.target.parentElement.parentElement;
  target.classList.add("done-todo");
};

const deleteTodo = (e) => {
  const target = e.target.parentElement.parentElement;
  target.remove();
  todoArr = todoArr.filter((todo) => todo.id != parseInt(target.id));
  saveTodos();
};

const showTodo = (todo) => {
  const todoItem = document.createElement("li");
  todoItem.id = todo.id;
  todoItem.textContent = todo.text;

  const buttonWrap = document.createElement("div");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  doneButton.textContent = "완료";
  deleteButton.textContent = "삭제";

  doneButton.addEventListener("click", doneTodo);
  deleteButton.addEventListener("click", deleteTodo);

  buttonWrap.appendChild(doneButton);
  buttonWrap.appendChild(deleteButton);
  todoItem.appendChild(buttonWrap);
  todoList.appendChild(todoItem);
};

const addTodo = (e) => {
  e.preventDefault();
  const todo = todoInput.value;
  if (todo === "") return;
  todoInput.value = "";
  const objTodo = {
    text: todo,
    id: Date.now(),
  };
  todoArr.push(objTodo);
  showTodo(objTodo);
  saveTodos();
};

todoForm.addEventListener("submit", addTodo);

const savedTodos = localStorage.getItem("todoKEY");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(showTodo);
}
