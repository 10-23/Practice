import { useEffect, useRef, useState } from "react";

const imgURL = [
  "https://t1.daumcdn.net/cfile/tistory/99E3B33E5B2852742A",
  "https://photo.coolenjoy.co.kr/bbs/data/multi_photo/26/991122890_f7bc6cce_water+mountains.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTVfNjMg/MDAxNTg0MjU5ODgyODE0.BNiJyLPjSh2p7IHumBF9sBicKqVGHwvZsmX1uSiKES0g.r-K3xCX-_OfaxX3fTEMjwH_bfFIgbQNqjqHIH_wRWC4g.JPEG.se___ovo/%EC%BB%B4%ED%93%A8%ED%84%B0%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4%EC%9E%90%EC%97%B001.jpg?type=w800",
  "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  "https://i.pinimg.com/originals/d8/b2/30/d8b23005b7d881a9f2d289d1536355a3.jpg",
  "https://i.redd.it/3mtnz967c3ba1.jpg",
  "https://rare-gallery.com/mocahbig/53913-Artistic-Outrun-HD-Wallpaper.jpg",
];

const tick = () => {
  const today = new Date();
  return {
    hours: today.getHours().toString().padStart(2, 0),
    minutes: today.getMinutes().toString().padStart(2, 0),
    seconds: today.getSeconds().toString().padStart(2, 0),
  };
};

const getGeolocation = async () => {
  const { coords } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  return coords;
};

const fetchWeather = async () => {
  const { latitude, longitude } = await getGeolocation();

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"5f55b28e49b0c3ec0139d01faf8c1c88"}`
  );
  const data = await res.json();

  return data;
};

const getWeather = async () => {
  const { name, weather, clouds } = await fetchWeather();
  const { description, icon, id, main } = weather[0];
  const IconURL = `http://openweathermap.org/img/w/${icon}.png`;

  return {
    name,
    clouds,
    IconURL,
  };
};

const Practice06 = () => {
  const [time, setTime] = useState(tick);
  const [weather, setWeather] = useState({ name: "", clouds: "", IconURL: "" });
  const [todo, setTodo] = useState([]);
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const nextId = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.name) setUserName(inputValue);
    else if (e.target.todo) setTodo([...todo, { id: ++nextId.current, value: inputValue }]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleRemoveTodo = (_id) => {
    setTodo((todo) => todo.filter(({ id }) => _id !== id));
  };

  useEffect(() => {
    const clockId = setInterval(() => {
      setTime(tick);
    }, 1000);

    getWeather().then(setWeather);

    document.body.style.backgroundImage = `url(${imgURL[Math.floor(imgURL.length * Math.random())]})`;
    return () => {
      clearInterval(clockId);
    };
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div className="hours">{time.hours}시</div>
        <div className="minuts">{time.minutes}분</div>
        <div className="seconds">{time.seconds}초</div>
      </div>
      <div className="weather">
        <div>{weather.name}</div>
        <div>{weather.clouds.all}</div>
        <img src={weather.IconURL} alt="날씨 아이콘" />
      </div>
      <form className="greeting-form" onSubmit={handleSubmit}>
        {userName ? (
          <>
            <div className="greeting">Hello! ${userName}</div>
            <input
              ref={(ref) => ref?.focus()}
              className="todo-input"
              placeholder="할일을 입력해주세요"
              name="todo"
              value={inputValue}
              onChange={handleChange}
            />
          </>
        ) : (
          <input type="text" placeholder="이름을 입력해주세요" name="name" value={inputValue} onChange={handleChange} />
        )}
      </form>
      <ul className="todo-list">
        {todo.map(({ id, value }) => (
          <li key={id} className="todo-item">
            <div className="todo-contents">{value}</div>
            <button className="todo-delete" onClick={() => handleRemoveTodo(id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice06;
