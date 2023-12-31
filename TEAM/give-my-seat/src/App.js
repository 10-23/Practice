import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seat from "./pages/Seat";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Cafe from "./pages/Cafe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/:id" element={<Cafe />} />
      <Route path="/main/:id/seat" element={<Seat />} />
    </Routes>
  );
}

export default App;
