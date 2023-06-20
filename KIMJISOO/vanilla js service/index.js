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

const HIDDEN_CLASSNAME = "hidden";

const onUserNameForm = (e) => {
  e.preventDefault();

  userNameForm.classList.add(HIDDEN_CLASSNAME);
  const userName = userNameInput.value;

  onGreeting(userName);
};

const onGreeting = (userName) => {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}👋`;
};

userNameForm.addEventListener("submit", onUserNameForm);
