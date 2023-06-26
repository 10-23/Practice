// import Weather from "components/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Navagation from "components/Navagation";
import Home from "pages/Home";
import About from "pages/About";
import Profile from "pages/Profile";
import SearchResults from "pages/SearchResults";

function App() {
  return (
    // <div>
    //   <h1>React</h1>
    //   <Weather />
    // </div>

    // Movie App
    <Router>
      <Navagation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
