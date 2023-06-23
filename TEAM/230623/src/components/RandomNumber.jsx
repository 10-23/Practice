import { useState } from "react";

// min : 50, max: 100
// Math.random() 0 ~ 1
// Math.random() * (max - min) : 0 ~ 50;
// Math.random() * (max - min) + min : 50 ~ 100;

const RandomNumber = ({ min, max }) => {
  const getRandomNumber = () => parseInt(Math.random() * (max - min) + min);
  const [number, setNumber] = useState(getRandomNumber);

  function handleRandom() {
    setNumber(getRandomNumber);
  }

  return (
    <>
      <span>랜덤 숫자 : {number}</span>
      <button onClick={handleRandom}>숫자 생성하기</button>
    </>
  );
};

export default RandomNumber;
