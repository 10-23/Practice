import { Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Home from "components/Home";
import Detail from "components/Detail";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
