import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

const Chat = () => {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        userName,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };
  return (
    <>
      <h1>실시간 채팅</h1>
      <input
        type="text"
        value={userName}
        onChange={handleUserName}
        placeholder="사용자 이름을 입력하세요"
      />
      <h1>채팅</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            {message.userName} : {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input type="text" value={inputValue} onChange={handleInputValue} />
      <button onClick={handleMessageSubmit}>전송</button>
    </>
  );
};

export default Chat;
