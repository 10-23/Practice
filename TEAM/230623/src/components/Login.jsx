import React, { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function handleLogin() {
    if (id === "admin" && pw === "password") {
      alert("로그인성공!");
    } else {
      console.log("fail");
    }
  }
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };
  return (
    <div>
      <label htmlFor="">아이디</label>
      <input type="text" onChange={handleId} />
      <label htmlFor="">비밀번호</label>
      <input type="text" onChange={handlePw} />
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
