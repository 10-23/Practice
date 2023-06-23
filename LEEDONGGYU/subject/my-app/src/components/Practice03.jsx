import { useState } from "react";

const Practice03 = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "200px", display: "flex", justifyContent: "space-around" }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ flexGrow: 1, textAlign: "center" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Practice03;
