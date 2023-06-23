import { useState } from "react";

const DUMMY = [
  { id: 1, url: "images/1.png" },
  { id: 2, url: "images/2.png" },
  { id: 3, url: "images/3.png" },
  { id: 4, url: "images/4.png" },
  { id: 5, url: "images/5.png" },
  { id: 6, url: "images/6.png" },
  { id: 7, url: "images/7.png" },
  { id: 8, url: "images/8.png" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <img src={DUMMY[index].url} alt="슬라이드" />
      <button onClick={() => setIndex((index) => (index > 0 ? index - 1 : DUMMY.length - 1))}>이전</button>
      <button onClick={() => setIndex((index) => (index === DUMMY.length - 1 ? 0 : index + 1))}>다음</button>
    </div>
  );
};

export default ImageSlider;
